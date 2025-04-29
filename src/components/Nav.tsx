import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Close mobile menu if open
        setMenuOpen(false);
        
        // Smooth scroll to contact section
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    <span className='logo-text'>LH</span>
                </Link>

                <div className='menu-icon' onClick={toggleMenu}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <li className='nav-item'>
                    <Link 
                        to='/'
                        className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>
                {/* <li className="nav-item">
                        <Link 
                            to="/about" 
                            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link 
                            to="/blog" 
                            className={location.pathname === '/blog' ? 'nav-link active' : 'nav-link'}
                            onClick={() => setMenuOpen(false)}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#contact" 
                            className="nav-link"
                            onClick={handleContactClick}
                        >
                            Contact
                        </a>
                    </li>
            </ul>
            <div className='social-icons'>
                <a href='https://www.linkedin.com/in/leonardhawkes' target='_blank' rel='noopner noreferrer'>
                    <i className="fab fa-linkedin" />
                </a>
                <a href="https://www.github.com/leonardhawkes" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                </a>
                <a href="https://medium.com/@leonardhawkesjr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-medium" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-file-alt" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;