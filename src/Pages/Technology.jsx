import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

// Layout Components
import Hero from '../Layout/Hero';
import BannerSection from '../Layout/BannerSection';
import TechnologyImage from '../Images/TechnologyImage.jpg';

// Images for Grid
import RailsLogo from '../Images/RailsLogo.svg';
import Ruby from '../Images/Ruby.svg';
import ReactLogo from '../Images/ReactLogo.svg';
import html from '../Images/html.svg';
import CSS from '../Images/CSS.png';
import JSLogo from '../Images/JSLogo.png';
import SASS from '../Images/SASS.png';
import CSharp from '../Images/CSharp.png';
import Golang from '../Images/Golang.png';

const FlexItem = props => (
		<div className="logo-item flex-fill p-2" key={1}><img src={props.tech.image} /></div>
	)


class Technology extends Component {

  render() {

    return (
      <React.Fragment>
        <Hero
	      	heroStyle={{
						background: `url(${TechnologyImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'right'
					}}
					position={{size: 5, offset: 6}}
	      	heading="Technology"
	      	subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <h5 className="pt-5 pb-5">These are technologies, frameworks, libraries, and tools that I am passionate about.</h5>

	      <div className="d-flex flex-row flex-wrap align-items-center">
	      	<FlexItem tech={{image: RailsLogo}} />
	      	<FlexItem tech={{image: Ruby}} />
	      	<FlexItem tech={{image: ReactLogo}} />
	      </div>

	      <div className="d-flex flex-row flex-wrap align-items-center">
	      	<FlexItem tech={{image: html}} />
	      	<FlexItem tech={{image: CSS}} />
	      	<FlexItem tech={{image: JSLogo}} />
	      </div>

	      <div className="d-flex flex-row flex-wrap align-items-center">
	      	<FlexItem tech={{image: SASS}} />
	      	<FlexItem tech={{image: CSharp}} />
	      	<FlexItem tech={{image: Golang}} />
	      </div>

	      
      </React.Fragment>
    );
  }
}

export default Technology;