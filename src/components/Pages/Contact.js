import React from 'react';
import {Form, Button, InputGroup, FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    return (
        <div>
            <h1 className="header">Sumbit your details</h1>
                <div className="flex">

                    <div className="contact-form">
                    <Form>

                    <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"/>
  </Form.Group>

  <Form.Label className="website" htmlFor="basic-url">Website</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      https://
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>


  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Allow us to sell your personal details to whomever we want" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                    </div>
                    <div className="contact-info">
                      
                      <div>
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>                      
                      <p>hello@yay.com</p>
                      </div>

                      <div>
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 
                    <p>123 456 7890</p>
                    </div>

                    <div>   
                    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>                   
                    <p>123 Some street <br></br> Somewhere <br></br> Some City <br></br>1000</p>                   
                    </div>
        

                </div>        
                </div>        
        </div>
    )
}

export default Contact