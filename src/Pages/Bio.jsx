import React, { Component } from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

import Hero from '../Layout/Hero';

import BioImage from '../Images/BioImage.jpg';


class Bio extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero
	      	heroStyle={{
						background: `url(${BioImage}) no-repeat center center`,
						backgroundSize: 'cover',
						textAlign: 'right'
					}}
					position={{size: 5, offset: 6}}
	      	heading="Bio"
	      	subHeading="Completed production work currently out in the wild, as well as ongoing personal and toy projects."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <Container>
	      <Row>
	      	<Col sm="12" md={{size: 8, offset: 1}} className="text-left">
		      	<p>I'm originally a Chicago-area native, but have lived in the Carolinas, Florida, Boston, and the Washington DC area. I owe my appreciation for all things music and audio to a musically inclined family.  I have fond childhood memories of family BBQs cascading into late night jam sessions where acoustic guitars, banjos, and even an electric organ often made an appearance.</p>

						<p>This appreciation quickly grew into an obsession when, as a teenager in the 90s, I picked up my first guitar and started learning Nirvana songs.  It wasn't long before I discovered 4 track tape recorders, then computers, and then figured out how to record guitars into our family computer. My interest in the recording arts expanded with emerging technologies and I began using Digital Audio Workstations (DAWs) to compose, arrange, and record music.  Eventually I decided to start the process of turning this obsession into a career and attended college in Boston, MA, eventually graduating with a degree in Audio Production.</p>

						<p>As I continued to dig deeper into the application of technology to solve problems in the audio world, I started to become interested in what drove that technology.  My exploration into development started, like many, with static HTML and CSS pages.  Then I started looking into dynamic languages and discovered <a href="www.codeacademy.com">code academy</a>, which afforded me the opportunity to very quickly start working with Ruby, and then Javascript, applying code to solve problems.  I was addicted.</p>

						<p>In the winter of 2014 I decided to take my fascination with development to the next level.  I left my job working as an Audio Technology Consultant and attended <a href="www.launchacademy.com">Launch Academy</a>, a 12 week immersive full stack development bootcamp located in Boston.</p> 

						<p>I successfully completed the program and have been working in the industry for a diverse set of companies ranging from medical device manufacturers, political action commities, food service industry professionals, and more.</p> 
					</Col>
	      </Row>
	      </Container>

      </React.Fragment>
    );
  }
}

export default Bio;