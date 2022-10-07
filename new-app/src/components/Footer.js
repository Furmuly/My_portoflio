import React from 'react';
import { Button, Input } from '@mui/material';
import { Form, TextArea } from 'semantic-ui-react';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
//import { useState } from 'react';


const SERVICE_ID = "service_ug71nmr";
const TEMPLATE_ID = "template_dhprmc5";
const USER_ID = "bc_U7DNk4ego0txBc";
function Footer() {
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
        //handle on submit the form that allows visitors to write me directly form the site using mailjs 
        //my contact info just incase if the form isn't working 
        <div className='footer'>
            <div className='contact-grid'>
                <h1>Contact me</h1>
                <p>Do you have any questions? Please do not hesitate to contact me directly.
                    I will come back to you within a matter of hours to help you, if the form didn’t work you can contact me directly by email or phone.</p>
                <div className='col1'>
                    <div className='col'>
                        <Form onSubmit={handleOnSubmit}>
                            <Form.Field
                                id='form-input-control-email' value={this.state.email} onChange={this.onChange}
                                control={Input}
                                name='email'
                                placeholder='Email...' required />
                            <span className="text-danger">{this.state.error}</span>


                            <Form.Field id='form-input-control-last-name'
                                control={Input}
                                name='from_name' placeholder='Name...'
                                required />


                            <Form.Field id='form-input-control-subject'
                                control={Input}
                                name='subject' placeholder='Subject...'
                                required />

                            <Form.Field id='form-textarea-control-message'
                                control={TextArea} rows="3"
                                name='message' placeholder='Message...'
                                required />
                            <Button type='submit' variant='contained' color="secondary"  >Submit</Button>
                        </Form>
                    </div>

                    <div className='col'>
                        <div>
                            <LanguageIcon fontSize='large' />
                            <p><a href='https://www.google.com/maps/place/Chem.+du+Centenaire+4,+1008+Prilly/@46.5347112,6.6049434,17z/data=!3m1!4b1!4m5!3m4!1s0x478c31c3a573644f:0xdc2cdd9417882754!8m2!3d46.5347075!4d6.6071321'>Chemin du centenair 4
                                1008 Prilly</a></p>
                        </div>

                        <div>
                            <CallIcon fontSize='large' />
                            <p><a href='callto:076 803 92 51'>076 803 92 51</a></p>
                        </div>

                        <div>
                            <EmailIcon fontSize='large' />
                            <p><a href='mailto:furmulynabila@gmail.com'>furmulynabila@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;