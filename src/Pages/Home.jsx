import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

// Images
import HomeImage from '../Images/HomeImage2.jpg';
import BioImage from '../Images/BioImage.jpg';
import ProjectImage from '../Images/ProjectImage.jpg';
import TechnologyImage from '../Images/TechnologyImage.jpg';
import AudioImage from '../Images/AudioImage.jpg';

import Hero from '../Layout/Hero';
import BannerSection from '../Layout/BannerSection';



class Home extends Component {
  render() {
    return (
      <React.Fragment>
	      <Hero
	      	heroStyle={{
						background: `url(${HomeImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'left'
					}}
					position={{size: 5, offset: 1}}
	      	heading="Welcome"
	      	subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <BannerSection
	      	bannerStyle={{
	      		background: `url(${BioImage}) no-repeat center center`,
						backgroundSize: 'cover',
						textAlign: 'right',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 5, offset: 6}}>
		      	<h3 className="display-3 text-white">My Bio</h3>
		        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection
	      	bannerStyle={{
	      		background: `url(${ProjectImage}) no-repeat center center`,
						backgroundSize: 'cover',
						textAlign: 'left',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 5, offset: 1}}>
		      	<h3 className="display-3 text-white">My Work</h3>
		        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/projects" className="btn btn-primary">View My Work</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection
	      	bannerStyle={{
	      		background: `url(${TechnologyImage}) no-repeat center center`,
						backgroundSize: 'cover',
						textAlign: 'right',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 5, offset: 6}}>
		      	<h3 className="display-3 text-white">Technology</h3>
		        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/technology" className="btn btn-primary">View Tech Stack</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection
	      	bannerStyle={{
	      		background: `url(${AudioImage}) no-repeat center center`,
						backgroundSize: 'cover',
						textAlign: 'left',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 5, offset: 1}}>
		      	<h3 className="display-3 text-white">Audio & Music</h3>
		        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/music" className="btn btn-primary">Take A Listen</Link>
		        </p>
	        </Col>
	      </BannerSection>

      </React.Fragment>
    );
  }
}

export default Home;