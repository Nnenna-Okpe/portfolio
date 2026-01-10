import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "typed.js";

export const MainPage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Front-End Developer",
        "Legal-Tech Enthusiast",
        "React Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    // Cleanup to prevent multiple instances
    return () => {
      typed.destroy();
    };
  }, []);

  const skills = [
    { name: "React", level: 85 },
    { name: "Tailwindcss", level: 88 },
    { name: "Bootstrap", level: 90 },
    { name: "CSS", level: 90 },
    { name: "Javascript", level: 80 },
    { name: "HTML", level: 90 },
    { name: "Graphics design", level: 78 },
  ];
  const projects = [
    {
      image: "images/commerce-cover.png",
      title: "E-commerce Website",
      code: "https://github.com/Nnenna-Okpe/commercial-website",
      website: "https://commercial-website-tau.vercel.app/",
      tools: "React-Vite, Tailwindcss, luicide-Icons",
      description:
        "An e-commerce website with a product page, cart functionality, and checkout process. Features smooth animations and responsive design for an engaging user experience.",
    },
    {
      image: "images/1000195671.jpg",
      title: "Consultation Page",
      code: "https://github.com/Nnenna-Okpe/demo-page",
      website: "https://make-up-consultation.onrender.com/",
      tools: "React, Tailwindcss",
      description:
        "Created a website for a makeup studio. It includes their employees, story, past works, contact and consultation which is sent to their email ",
    },
    {
      image: "images/1000195672.jpg",
      title: "QR Code Menu",
      code: "https://github.com/Nnenna-Okpe/qrcode-online-menu",
      website: "https://qrcode-online-menu.vercel.app/",
      tools: "React, Google Sheets, Bootstrap",
      description:
        "A menu website which also includes a page for catering services provided. It comes connected through API at the admin page to google sheets for storing of data and a final touch of a QR code",
    },
    {
      image: "images/1000195675.jpg",
      title: "Professional Portfolio",
      code: "#",
      website: "https://okpechiamaka.com/",
      tools: "React, Bootstrap",
      description:
        "A portfolio page for a data engineer. Comes with a contact page connected to the receipent's email and an admin page for info updates ",
    },
    {
      image: "images/music.jpg",
      title: "Online Music Player",
      code: "https://github.com/Nnenna-Okpe/react-api-music-app",
      website: "https://api-music-player.web.app/",
      tools: "React, API, Bootstrap",
      description:
        "A music player connected with API to deezer for a seamless streaming of music with a download function.",
    },
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
    const mailtoLink = `mailto:${encodeURIComponent(
      toEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      message
    )}`;

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
          If your email client doesn’t open automatically, you can send a
          message through whatsapp instead.
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
    <Container fluid className="p-0 m-0 overflow-hidden">
      <section
        id="home"
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center base-background text-center text-md-start"
        style={{
          backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url('images/luca-bravo-9l_326FISzk-unsplash.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          color: "white",
          padding: "20px",
        }}
      >
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col xs={12} md={8} lg={8}>
            {/* Main Heading */}
            <h1
              className="fw-bold mb-3 animate__animated animate__fadeInDown"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Hello, I am <span className="purple">Okpe Nnenna</span>
            </h1>

            {/* Typing Effect for Role */}
            <h2
              className="mb-3 animate__animated animate__fadeIn animate__delay-1s"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                fontWeight: "300",
              }}
            >
              <span ref={typedRef}></span>
            </h2>

            {/* Paragraphs */}
            <p
              className="animate__animated animate__fadeInUp animate__delay-2s"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              I write clean, well-structured code and enhance user experience
              with smooth, engaging animations that bring websites to life.
            </p>

            {/* Call-to-Action Button */}
            <Button
              className="highlight mt-3 px-4 py-2 animate__animated animate__zoomIn animate__delay-3s"
              href="https://wa.me/2349121361644"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.2rem",
                borderRadius: "50px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Hire Me
            </Button>
          </Col>
        </Row>
      </section>

      <section id="about" className="dull-background">
        <Row className="text-dark p-4">
          {/* EXPERIENCE */}
          <div className="col-md-6">
            <h3 className="mb-4 text-center">Experience</h3>

            <div className="d-flex flex-column gap-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title mb-1">
                      Lead Frontend Web Developer
                    </h5>
                    <span className="badge bg-primary">2025 – Present</span>
                  </div>
                  <p className="text-muted">DevInnovers • Remote</p>
                  <p className="text-muted mb-2">
                    ReactVite • Tailwindcss • JavaScript
                  </p>
                  <p className="mb-0">
                    Lead the pront end team in the development of a user
                    friendly application for the storing, sharing and usage of
                    codes from various developers world wide
                  </p>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title mb-1">Frontend Web Developer</h5>
                    <span className="badge bg-dark">2024 – 2025 </span>
                  </div>
                  <p className="text-muted">DevInnovers • Remote</p>
                  <p className="text-muted mb-2">
                    ReactVite • Tailwindcss • JavaScript
                  </p>
                  <p className="mb-0">
                    Partook in the development of a user friendly application
                    for the storing, sharing and usage of codes from various
                    developers world wide
                  </p>
                </div>
              </div>

              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <h5 className="card-title mb-1">
                      React Projects (Freelance / Personal)
                    </h5>
                  </div>
                  <p className="text-muted mb-2">
                    React • Bootstrap • GoogleSheets • CSS • JavaScript
                  </p>
                  <p className="mb-0">
                    Developed portfolio websites, QR-code menu systems, and
                    API-driven applications using modern React patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Col xs={12} md={6}>
            <h3 className="mb-4 mt-4 mt-md-0 text-center">SKILLS</h3>
            <div className=" p-4" style={{ maxWidth: "400px" }}>
              {skills.map(({ name, level }) => (
                <div key={name} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <strong className="text-dark">{name}</strong>
                    <span className="purple">{level}%</span>
                  </div>
                  <div
                    className="progress"
                    style={{ height: "4px", backgroundColor: "#383f4e" }}
                  >
                    <div
                      className="progress-bar base-background"
                      role="progressbar"
                      style={{
                        width: `${level}%`,
                        transition: "width 1s ease-in-out",
                      }}
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
      <section id="projects" className="dull-background">
        <Row className="p-3 d-flex justify-content-center align-items-center ">
          <h1 className="text-white mt-5 text-center mb-3 purple display-5">
            My Projects
          </h1>

          {projects.map((project, index) => (
            <Col key={index} md={4} xs={11} className="mb-4 p-2">
              <Card className="shadow-sm bg-dark text-white">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{
                    maxHeight: "300px",
                    minHeight: "280px",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Card.Body style={{ backgroundColor: "#0D1117" }}>
                  <Card.Title style={{ fontSize: "25px" }}>
                    {project.title}
                  </Card.Title>
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
      <section id="contact" className="base-background ">
        <Row className="d-flex flex-column justify-content-center align-items-center p-4 text-white">
          <Col md={8} className="mt-5">
            <h1 className="text-center purple mt-1 display-3">Contact Me</h1>
            <p className="text-center">
              Feel free to reach out to me for any inquiries or collaborations.
            </p>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control dull-background"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control dull-background"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control dull-background"
                  id="message"
                  rows="3"
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                id="submitBtn"
                className="highlight"
                disabled={loading}
              >
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
            <div className="d-flex gap-3 justify-content-center social-icons mt-3">
              <a
                href="https://www.linkedin.com/in/okpe-nnenna-1b1213260/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Nnenna-Okpe"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.tiktok.com/@nenztech?_t=ZM-8tAniAtiM9l&_r=1"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/2349121361644"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div id="formStatus">{statusMsg}</div>
      </section>
    </Container>
  );
};
