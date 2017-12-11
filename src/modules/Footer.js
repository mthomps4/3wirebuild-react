import React from 'react';

const Footer = () => {
    return (
        <nav className="fixed-bottom bg-dark">
            <div className="row justify-content-center align-items-center p-4">
                <a className="nav-link nav-item" href="#">
                    Twitter
                </a>
                <a className="nav-link nav-item" href="#">
                    Twitter
                </a>
                <a className="nav-link nav-item" href="#">
                    Twitter
                </a>
                <a className="nav-link nav-item" href="#">
                    Twitter
                </a>
            </div>
            <p className="copydate d-flex justify-content-center">
                &copy; {new Date().getFullYear()} - Matt Thompson
            </p>
        </nav>
    );
};

export default Footer;
