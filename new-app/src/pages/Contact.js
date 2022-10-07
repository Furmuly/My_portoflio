//import { LineAxisOutlined } from '@mui/icons-material';
import React from 'react';
import '../styles/Contact.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Footer from '../components/Footer';


const Contact = () => {
    /*image slider variable */
    const slideImages = [
        {
            url: '../Slide_photos/sport.jpg',
        },

        {
            url: '../Slide_photos/joj.jpg',
        },

        {
            url: '../Slide_photos/game.jpg',
        }

    ];
    return (
        //Slider that slides images one by one using there index number/position// 
        <div className='Contact'>
            <div className='slide-container'>
                <div className='col'>
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div className="each-slide img-thumbnail" key={index}>
                                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <div className='col'>
                    <p>They say knowledge is an endless ocean, indeed it’s, and I have a long way to go,
                        but without any doubt have the courage, resilience, and motivation to get there,
                        I would like to thank you again for your valuable time and visiting my portfolio < SentimentSatisfiedAltIcon color="secondary" />  </p>
                </div>
            </div>
            < Footer />
        </div >

    );
}





export default Contact;