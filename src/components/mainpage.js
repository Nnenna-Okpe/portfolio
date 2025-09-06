import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MainPage = () => {
    const skills = [
  { name: "React", level: 85 },
  { name: "Bootstrap", level: 95 },
  { name: "CSS", level: 90 },
  { name: "Javascript", level: 80 },
  { name: "HTML", level: 90 },
  { name: "Graphics design", level: 90 },
];
    const projects = [
        { image: "images/1000195671.jpg", title: "Consultation Page", 
            code: "https://github.com/Nnenna-Okpe/demo-page", website: "https://demo-page-rho.vercel.app/",
            tools: "React, Bootstrap",
          description: "Created a website for a makeup studio. It includes their employees, story, past works, contact and consultation which is sent to their email " },
         { image: "images/1000195672.jpg", title: "QR Code Menu", 
            code: "https://github.com/Nnenna-Okpe/qrcode-online-menu", website: "https://qrcode-online-menu.vercel.app/",
            tools: "React, Google Sheets, Bootstrap",
          description: "A menu website which also includes a page for catering services provided. It comes connected through API at the admin page to google sheets for storing of data and a final touch of a QR code" },
        { image: "images/1000195675.jpg", title: "Professional Portfolio", 
            code: "#", website: "https://okpechiamaka.com/",
            tools: "React, Bootstrap",
          description: "A portfolio page for a data engineer. Comes with a contact page connected to the receipent's email and an admin page for info updates " },
           { image: "images/music.jpg", title: "Online Music Player", 
            code: "https://github.com/Nnenna-Okpe/react-api-music-app", website: "https://api-music-player.web.app/",
            tools: "React, API, Bootstrap",
          description: "A music player connected with API to deezer for a seamless streaming of music with a download function." },
       
    ];

 
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const toEmail = "okpennenna8@gmail.com";
    const subject = `Message from ${name} (${email})`;
    const mailtoLink = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    // Show success message
    setStatusMsg(
  <Alert
    variant="success"
    className="mt-3"
    dismissible
    onClose={() => setStatusMsg(null)}
  >
    <p>Thank you for your message!</p>
    <p>
      If your email client doesn’t open automatically, you can send a message through whatsapp instead.
    </p>
  </Alert>
);


    // Reset button after short delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Open mailto link
    window.location.href = mailtoLink;

    // Reset form fields
    e.target.reset();
  };

    return (
        <Container fluid className="p-0 m-0 overflow-hidden" >
            <section id="home" className="min-vh-100 d-flex flex-column justify-content-center align-items-center base-background"
             style={{
               backgroundImage: `
                linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                url('images/luca-bravo-9l_326FISzk-unsplash.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh',
                  color: 'white',
                  padding: '20px'
              }}
            >
                  <Row className='d-flex flex-column justify-content-center align-items-center'>
                    <Col className="text-white xs={11} md={8} lg={6} ms-4">
                      <h1 className="text-center" style={{fontSize: '50px'}}>Hello, I am <span className='purple'>Okpe Nnenna</span></h1>
                      <p className="mb-0" style={{fontSize: '20px'}}>I am a front-end developer and I
                         specialize in writing clean, well-structured code </p>
                          <p className="mt-0" style={{fontSize: '20px'}}>I also enhance user experience by adding smooth, 
                            engaging animations that bring websites to life. </p>
                    </Col>
                    <Col>
                      <Button className='highlight' href='https://wa.me/2349121361644' target="_blank" rel="noopener noreferrer">Hire Me</Button>
                    </Col>
                  </Row>
                  </section>
        <section id="about" className='dull-background'>
            <Row className="text-dark p-4">
                <Col className='d-flex flex-column justify-content-center align-items-center p-4' xs={12} md={6}>
                 <h1 className="text-center purple display-5" >About Me</h1>
                 <p>I am a web developer with a zeal to provide quality service using the latest adequte tools. 
                    I thrive in collaborations, need understanding, finding, learning, and applying the best possible solution
                 </p>
                 <Button className='highlight'>Download CV</Button>
                </Col>
                <Col  xs={12} md={6}>
                 <div className=" p-4" style={{ maxWidth: '400px' }}>
                  {skills.map(({ name, level }) => (
                    <div key={name} className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <strong className="text-dark">{name}</strong>
                      <span className="purple">{level}%</span>
                    </div>
                    <div className="progress" style={{ height: '4px', backgroundColor: '#383f4e' }}>
                     <div
                      className="progress-bar base-background"
                       role="progressbar"
                        style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
                        aria-valuenow={level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                     />
                    </div>
                   </div>
                  ))}
                 </div>
                </Col>
            </Row>
        </section>
        <section id="projects" className='dull-background'>
            <Row className='p-3 '>
                <h1 className="text-white mt-5 text-center mb-3 purple display-5">My Projects</h1>
               
    {projects.map((project, index) => (
         <Col key={index} md={4} xs={11} className="mb-4 p-2" >
            <Card className="shadow-sm bg-dark text-white" >
                <Card.Img variant="top" src={project.image} alt={project.title} style={{maxHeight: '300px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover'}} />
                <Card.Body style={{backgroundColor: '#0D1117'}}>
                    <Card.Title style={{fontSize: '25px'}}>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text>
                        <strong>Tools:</strong> {project.tools}
                    </Card.Text>
                        <div className="d-flex justify-content-start">
                          <Button
                                  
                                    href={project.website}
                                    className="me-2 highlight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                    Website
                            </Button>
                            <Button
                                   className="full-button"
                                    href={project.code}
                          target="_blank"
                                    rel="noopener noreferrer"
                            >
                                    View Code
                            </Button>
                        </div>
                </Card.Body>
            </Card>
            </Col>
    ))}


            </Row>

        </section>
        <section id="contact" className='base-background '>
            <Row className='d-flex flex-column justify-content-center align-items-center p-4 text-white'>
                <Col md={8} className="mt-5">
                    <h1 className="text-center purple mt-5 display-3">Contact Me</h1>
                    <p className="text-center">Feel free to reach out to me for any inquiries or collaborations.</p>
                      <form id="contactForm" onSubmit={handleSubmit}>
                       <div className="mb-3">
                         <label htmlFor="name" className="form-label">Name</label>
                         <input 
                           type="text" 
                           className="form-control dull-background" 
                           id="name" 
                           required 
                         />
                       </div>

                       <div className="mb-3">
                         <label htmlFor="email" className="form-label">Email</label>
                         <input 
                           type="email" 
                           className="form-control dull-background" 
                           id="email" 
                           required 
                         />
                       </div>

                       <div className="mb-3">
                         <label htmlFor="message" className="form-label">Message</label>
                         <textarea 
                           className="form-control dull-background" 
                           id="message" 
                           rows="3"
                           required 
                         ></textarea>
                       </div>

                      <Button type="submit" id="submitBtn" className="highlight" disabled={loading}>
                       {loading ? (
                           <>
                        <Spinner animation="border" size="sm" /> Sending...
                          </>
                          ) : (
                           "Send Message"
                       )}
                          </Button>
                      </form>
                         
                </Col>
                <Col md={8}>
                <div className="d-flex gap-3 justify-content-center social-icons">
                  <a href="https://www.linkedin.com/in/okpe-nnenna-1b1213260/" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Nnenna-Okpe" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.tiktok.com/@nenztech?_t=ZM-8tAniAtiM9l&_r=1" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="https://wa.me/2349121361644" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
</div>

                </Col>
            </Row>
                <div id="formStatus">{statusMsg}</div>

        </section>
        </Container>
    );
    }