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
	      	heading="Noise & Code"
	      	subHeading="A site all about my experiences as an audio engineer turned software developer."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <BannerSection
	      	bannerStyle={{
	      		background: `none`,
						backgroundSize: 'cover',
						textAlign: 'center',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 8, offset: 2}} style={{borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray'}}>
		      	{/*<h3 className="display-3 text-black">My Bio</h3>*/}
		        <p className="lead text-black">Welcome to Noise & Code, a site that serves as my personal playground and public journal for all things art & technology. Please feel free to explore. I will be periodically updating this site with new work, information, audio articles, and blog posts as they develop.</p>
		        <p className="lead">
		          {/*<Link to="/bio" className="btn btn-primary">View My Bio</Link>*/}
		        </p>
	        </Col>
	      </BannerSection>

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
		        <p className="lead text-white">Where I started, where I've been, and where I'm going.</p>
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
		        <p className="lead text-white">Completed production work currently out in the wild, as well as ongoing personal and toy projects.</p>
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
		        <p className="lead text-white">The tools and toys I'm passionate about, and how I use them to stay a happy, current, and effective developer.</p>
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
		        <p className="lead text-white">Music compositions, audio engineering projects, guitars, amps, crazy devices, and music technology related topics</p>
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