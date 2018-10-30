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



class SimplifiedHome extends Component {
  render() {
    return (
      <React.Fragment>
	      {/*<Hero
	      	heroStyle={{
						background: `url(${HomeImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'left'
					}}
					position={{size: 5, offset: 1}}
	      	heading="Noise & Code"
	      	subHeading="The journey from audio engineering to software development."
	      />*/}

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
	      		background: `none`,
						backgroundSize: 'cover',
						textAlign: 'center',
						marginBottom: 0
	      	}}
	      >
	      	<Col sm="12" md={{size: 6}} style={{borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray'}}>
	      		<Link to="/work">
			      	{/*<h3 className="display-3 text-black">My Bio</h3>*/}
			        <p className="lead text-black">Work</p>
			        <p className="lead">
			          {/*<Link to="/bio" className="btn btn-primary">View My Bio</Link>*/}
			        </p>
		        </Link>
	        </Col>
	        <Col sm="12" md={{size: 6}} style={{borderLeft: '1px solid lightgray', borderRight: '1px solid lightgray'}}>
		        <Link to="/play">
			      	{/*<h3 className="display-3 text-black">My Bio</h3>*/}
			        <p className="lead text-black">Play</p>
			        <p className="lead">
			          {/*<Link to="/bio" className="btn btn-primary">View My Bio</Link>*/}
			        </p>
		        </Link>
	        </Col>
	      </BannerSection>



      </React.Fragment>
    );
  }
}

export default SimplifiedHome;