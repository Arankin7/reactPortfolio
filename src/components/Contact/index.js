import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Contact() {

    const [show, setShow] = useState(false);
    
    // handles showing/hiding Modal
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleOpen}>
                Contact me
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Fill out this form to contact me!</h5>
                    
                    {/* Contact Form */}
                    <Form>
                        {/* Name input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control type="text" placeholder="Enter your Name"/>
                        </Form.Group>

                        {/* Email input */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address: </Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>

                        {/* Message input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Message: </Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Form.Group>

                        {/* Switch */}
                        <Form.Check
                            type="switch" id="custom-switch" label="I would like to be contacted" />
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact;