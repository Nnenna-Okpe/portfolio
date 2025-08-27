import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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
        { image: "images/1000195671.jpg", title: "Project 1", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 1" },
         { image: "images/1000195672.jpg", title: "Project 2", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 2" },
        { image: "images/1000195675.jpg", title: "Project 3", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 3" },
           { image: "images/egor-vikhrev-dY8TvpNz72o-unsplash.jpg", title: "Project 1", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 1" },
         { image: "images/sufyan-XFXe2caPMfE-unsplash.jpg", title: "Project 2", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 2" },
        { image: "images/egor-vikhrev-dY8TvpNz72o-unsplash.jpg", title: "Project 3", 
            code: "#", website: "#",
            tools: "React, Bootstrap",
          description: "Description of project 3" },
    ];

    return (
        <Container fluid className="p-0 m-0 overflow-hidden" >
            <section id="home" className="min-vh-100 d-flex flex-column justify-content-center align-items-center base-background"
             style={{
                backgroundImage: `url('images/luca-bravo-9l_326FISzk-unsplash.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white',
                padding: '20px' 
         }}>
                  <Row className='d-flex flex-column justify-content-center align-items-center'>
                    <Col className="text-white ">
                      <h1 className="text-center" style={{fontSize: '50px'}}>Hello, I am <span className='purple'>Okpe Nnenna</span></h1>
                      <p className="text-center mb-0" style={{fontSize: '20px'}}>I am a front-end developer and I
                         specialize in writing clean, well-structured code </p>
                          <p className="text-center mt-0" style={{fontSize: '20px'}}>I also enhance user experience by adding smooth, 
                            engaging animations that bring websites to life. </p>
                    </Col>
                    <Col>
                      <Button className='purple'>Hire Me</Button>
                    </Col>
                  </Row>
                  </section>
        <section id="about" className='dull-background'>
            <Row className="text-dark p-4">
                <Col className='d-flex flex-column justify-content-center align-items-center p-4' xs={11} md={6}>
                 <h1 className="text-center purple display-5" >About Me</h1>
                 <p>I am a web developer with a zeal to provide quality service using the latest adequte tools. 
                    I thrive in collaborations, need understanding, finding, learning, and applying the best possible solution
                 </p>
                 <Button>Download CV</Button>
                </Col>
                <Col  xs={11} md={6}>
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
         <Col key={index} md={4} className="mb-4 p-2" >
            <Card className="shadow-sm bg-dark text-white" >
                <Card.Img variant="top" src={project.image} alt={project.title} style={{maxHeight: '300px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover'}} />
                <Card.Body style={{backgroundColor: 'rgb(12, 6, 24)'}}>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Text>
                        <strong>Tools:</strong> {project.tools}
                    </Card.Text>
                        <div className="d-flex justify-content-start">
                          <Button
                                    variant="outline-primary"
                                    href={project.code}
                                    className="me-2 highlight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                            >
                                    View Code
                            </Button>
                            <Button
                                    variant="primary"
                                    href={project.website}
                          target="_blank"
                                    rel="noopener noreferrer"
                            >
                                    View Website
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
                    <h1 className="text-center purple mt-5 display-5">Contact Me</h1>
                    <p className="text-center">Feel free to reach out to me for any inquiries or collaborations.</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control dull-background" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control dull-background" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control dull-background" id="message" rows="3"></textarea>
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </Col>
                <Col md={8}>
                <div className="d-flex gap-3 justify-content-center social-icons">
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
</div>

                </Col>
            </Row>
        </section>
        </Container>
    );
    }