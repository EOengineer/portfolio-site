import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';

import Hero from '../Layout/Hero';
import ContactImage from '../Images/ContactImage.jpg';

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      	<Hero
	      	heroStyle={{
						background: `url(${ContactImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'left'
					}}
					position={{size: 5, offset: 1}}
	      	heading="Contact"
	      	subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <Container fluid>
	      	<Row>
			      <Col sm="12" md={{size: 3, offset: 2}} className="text-left pt-5 pb-5">
			      	<h5 className="pt-2 pb-3">Reach out and say hello.</h5>
			      	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
			      </Col>
		      	<Col sm="12" md={{size: 4, offset: 1}} className="text-left pt-5 pb-5">
				      <Form>
				        <FormGroup>
				          <Label for="name">Name</Label>
				          <Input type="text" name="name" id="name" placeholder="John Smith" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="email">Password</Label>
				          <Input type="email" name="email" id="email" placeholder="you@your-email.com" />
				        </FormGroup>
				        <FormGroup>
				          <Label for="message">Message</Label>
				          <Input type="textarea" name="message" id="message" />
				        </FormGroup>
				        <FormGroup tag="fieldset">
				          <legend>Want to stay in touch?</legend>
				          <FormGroup check>
				            <Label check>
				              <Input type="radio" name="radio1" />{' '}
				              Subscribe to my newsletter.
				            </Label>
				          </FormGroup>
				        </FormGroup>
				        <Button>Submit</Button>
				      </Form>
			      </Col>
		      </Row>
	      </Container>

      </React.Fragment>
    );
  }
}

export default Contact;