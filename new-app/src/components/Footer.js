import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <p> &copy; 2022 Nabila.Furmuly </p>
        </div>
    );
}

export default Footer;