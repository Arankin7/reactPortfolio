import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function Contact() {

    const [show, setShow] = useState(false);
    
    // handles showing/hiding Modal
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    // states for Contact form
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if(!isValid){
                setErrorMessage('Please enter a valid email address.');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if(!e.target.value.length){
                setErrorMessage(`${e.target.name} is required.`)
            }
            else {
                setErrorMessage('');
            }
        }
        
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        // console.log(formState);
    }

    return (
        <>
            <Button variant="primary" onClick={handleOpen}>
                Contact me
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Fill out this form to get in touch!</h5>
                    
                    {/* Contact Form */}
                    <Form>
                        {/* Name input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your Name"
                                name= "name"
                                defaultValue={name}
                                onBlur= {handleChange}
                            />
                        </Form.Group>

                        {/* Email input */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address: </Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                defaultValue={email}
                                onBlur= {handleChange}
                             />
                        </Form.Group>

                        {/* Message input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Message: </Form.Label>
                            <Form.Control
                            as="textarea"
                            name="message"
                            defaultValue={message} 
                            rows={3}
                            placeholder="Please Email me at arankin789@gmail.com to get in contact."
                            />
                        </Form.Group>

                        {/* Switch */}
                        <Form.Check
                            type="switch" id="custom-switch" label="I would like to be contacted" />
                    </Form>

                    {errorMessage && (
                        <Alert key="warning" variant="warning">
                            {capitalizeFirstLetter(errorMessage)}
                        </ Alert>
                    )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact;