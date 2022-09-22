//import { LineAxisOutlined } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import React from 'react';
import '../styles/Contact.css';
import { Form, TextArea } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const SERVICE_ID = "service_ug71nmr";
const TEMPLATE_ID = "template_dhprmc5";
const USER_ID = "bc_U7DNk4ego0txBc";

const Contact = () => {

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
                    control={TextArea}
                    name='message' placeholder='Message...'
                    required />
                <Button type='submit' >Submit</Button>
            </Form>
        </div>
    )
}





export default Contact;