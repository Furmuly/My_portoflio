//import { LineAxisOutlined } from '@mui/icons-material';
import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";

function Contact() {

    return (
        <Container>


            <div className="sec_sp">
                <div lg="5" className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br />
                        <br />
                        {contactConfig.hasOwnProperty("076 802 23 23") ? (
                            <p>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ""
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </div>
                <div lg="7" className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <div>
                            <div lg="6" className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div lg="6" className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                            </div>
                        </div>
                        <textarea
                            className="form-control rounded-0"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required
                        ></textarea>
                        <br />
                        <div>
                            <div lg="12" className="form-group">
                                <button className="btn ac_btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}





export default Contact;