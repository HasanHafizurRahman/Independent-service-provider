import './Footer.css'
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        
        <footer>
            <small>Copyright © to home food catering sevice {year}.</small>
        </footer>
    );
};

export default Footer;