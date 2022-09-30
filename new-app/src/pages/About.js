import React from 'react';
import "../styles/About.css";
import Myimg from '../photos/MyImg.jpg';
//import { Grid } from '@mui/material';
//import { useTheme } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import CssBaseline from '@mui/material/CssBaseline';




function About() {
    return (

        <div className='container'>
            <div className='title'>
                <h1>About Me</h1>
                <div className='About-grid text-center'>
                    <div className='col'>
                        <img src={Myimg} className="img-thumbnail" alt="my img" />
                    </div>
                    <div className='col'>
                        <h2> I'am Nabila </h2>
                        <p>Thank you for your time and interest!
                            Curiosity (the desire to Know) is the search engine that brings us to wonderful and unimaginable places,
                            The sense of curiosity in me was strong from childhood and always brought me to wonder how modern technology functions,
                            coming from a third-world country I didn’t have the chance/opportunity to discover more and go far in this adventure,
                            being here in Switzerland was the perfect chance for me to feed my curiosity and passion for coding and technology,
                            nd so I decided to do an IT application development apprenticeship.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;