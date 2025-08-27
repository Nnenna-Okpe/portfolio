import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

export const CustomNavbar = () => {
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top; 
            if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
                currentSection = section.id;
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'HOME' },
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'contact', label: 'CONTACT' },
    ];

    return (
        <nav className="sidebar sticky-sidebar p-0 m-0 base-background d-flex flex-column justify-content-center align-items-center">
            <img src="images/Screenshot_20250518-091118_1.jpg" alt="Logo" className="img-fluid mb-3" style={{borderRadius:'50%', maxWidth:'50%'}}/>
            <ul className="nav flex-column pt-3 text-center text-white">
                {navLinks.map(link => (
                    <li className="nav-item" key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className={`nav-link ${activeSection === link.id ? 'active fw-bold purple' : 'text-white'}`}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
