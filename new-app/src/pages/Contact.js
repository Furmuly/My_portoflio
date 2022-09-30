//import { LineAxisOutlined } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import React from 'react';
import '../styles/Contact.css';
import { Form, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';






const SERVICE_ID = "service_ug71nmr";
const TEMPLATE_ID = "template_dhprmc5";
const USER_ID = "bc_U7DNk4ego0txBc";

/*image slider variable */
const slideImages = [
    {
        url: '../Slide_photos/sport.jpg',
        caption: ''
    },

    {
        url: '../Slide_photos/joj.jpg',
        caption: ''
    },

];

const Contact = () => {
    //message handler variable to conect to mail.js //
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div className='Contact'>
            <div className='slide-container'>
                <div className='col'>
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div className="each-slide center img-thumbnail" key={index}>
                                <div style={{ backgroundImage: `url(${slideImage.url})` }}>
                                    <span>{slideImage.caption}</span>
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

            <div className='contact-grid'>
                <h1>Contact me</h1>
                <p>Do you have any questions? Please do not hesitate to contact me directly.
                    I will come back to you within a matter of hours to help you, if the form didn’t work you can contact me directly by email or phone.</p>
                <div className='col1'>
                    <div className='col'>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-email'
                                control={Input}
                                name='email'
                                placeholder='Email...' required />


                            <Form.Field id='form-input-control-last-name'
                                control={Input}
                                name='from_name' placeholder='Name...'
                                required />


                            <Form.Field id='form-input-control-subject'
                                control={Input}
                                name='subject' placeholder='Subject...'
                                required />

                            <Form.Field id='form-textarea-control-opinion'
                                control={TextArea} rows="3"
                                name='message' placeholder='Message...'
                                required />
                            <Button type='submit' variant='contained' color="secondary"  >Submit</Button>
                        </Form>

                    </div>

                    <div className='col'>
                        <div>
                            <LanguageIcon fontSize='large' />
                            <p>Chemin du centenair 4
                                1008 Prilly</p>
                        </div>

                        <div>
                            <CallIcon fontSize='large' />
                            <p>076 803 92 51</p>
                        </div>

                        <div>
                            <EmailIcon fontSize='large' />
                            <p>furmulynabila@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}





export default Contact;