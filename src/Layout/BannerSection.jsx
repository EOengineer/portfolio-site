import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

class BannerSection extends Component {
  render() {

  	const { bannerStyle, className} = this.props;

    return (
      <Jumbotron fluid style={bannerStyle} className={`${className}`}>
        <Container>
      		<Row>
		        {this.props.children}
	        </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default BannerSection;