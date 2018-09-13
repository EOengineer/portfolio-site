import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';


class Hero extends Component {
  render() {

  	const { heroStyle, heading, subHeading, buttonCTA, buttonUrl, className, position } = this.props;

    return (
      <Jumbotron fluid style={heroStyle} className={`${className}`}>
        <Container>
      		<Row>
      			<Col sm="12" md={position}>
			        <h3 className="display-3 text-white">{heading}</h3>
			        <p className="lead text-white">{subHeading}</p>
			        <p className="lead">
			          <Link to={buttonUrl} className="btn btn-primary">{buttonCTA}</Link>
			        </p>
		        </Col>
	        </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default Hero;