import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    const location = useLocation();

    return (
        <nav id='nav'>
            <ul className='links'>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to='/'>Leonard Hawkes</Link>
                </li>
                <li className={location.pathname === '/dj-events' ? 'active' : ''}>
                    <Link to='/'>DJ Events</Link>
                </li>
                <li className={location.pathname === '/blog' ? 'active' : ''}>
                    <Link to='/'>Blog</Link>
                </li>
                <li className={location.pathname === '/#footer' ? 'active' : ''}>
                    <a href='#footer'>Contact</a>
                </li>
            </ul>
            <ul className='icons'>
                <li>
                    <a href='https://www.linkedin.com/in/leonardhawkes' className='icon brands fa-linkedin'>
                        <span className='label'>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.github.com/leonardhawkes' className='icon brands fa-github'>
                        <span className='label'>Github</span>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/leonardhawkes' className='icon brands alt fa-adobe'>
                        <span className='label'>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;