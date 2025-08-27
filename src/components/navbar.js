import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const CustomNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Desktop sidebar (hidden on small screens) */}
      <nav className="sidebar sticky-sidebar d-none d-md-flex flex-column justify-content-center align-items-center p-0 m-0 base-background">
        <img
          src="images/Screenshot_20250518-091118_1.jpg"
          alt="Logo"
          className="img-fluid mb-3"
          style={{ borderRadius: "50%", maxWidth: "50%" }}
        />
        <ul className="nav flex-column pt-3 text-center text-white">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${
                  activeSection === link.id
                    ? "active fw-bold purple"
                    : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile top navbar (hidden on md and up) */}
      <Navbar
        expand="md"
        bg="dark"
        variant="dark"
        className="d-flex d-md-none"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="images/Screenshot_20250518-091118_1.jpg"
              alt="Logo"
              style={{ borderRadius: "50%", width: "40px", height: "40px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.id}
                  href={`#${link.id}`}
                  className={
                    activeSection === link.id
                      ? "active fw-bold purple"
                      : "text-white"
                  }
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
