import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Jumbotron, Button, Row, Col } from 'reactstrap';

// Layout Components
import Hero from '../Layout/Hero';
import BannerSection from '../Layout/BannerSection';
import ProjectImage from '../Images/ProjectImage.jpg';

// Project Images
import AngelApp from '../Images/AngelApp.jpg';
import SOS from '../Images/SOS.png';
import OrthoIllustrated from '../Images/OrthoIllustrated.png';
import ReadyNationInternational from '../Images/ReadyNationInternational.png';
import GeoFunders from '../Images/GeoFunders.png';
import GCBS from '../Images/GCBS.png';
import SalesDashboard from '../Images/SalesDashboard.png';

const bannerStyle = {
	marginBottom: 0,
	backgroundColor: '#fff',
	textAlign: 'left'
}

class Projects extends Component {

	imageStyle(image) {
		return {
			background: `url(${image}) no-repeat center center`,
			backgroundSize: 'contain'
		}
	}

  render() {
    return (
      <React.Fragment>
        <Hero
	      	heroStyle={{
						background: `url(${ProjectImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'left'
					}}
					position={{size: 5, offset: 1}}
	      	heading="Projects"
	      	subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(AngelApp)}
	      	>
	        </Col>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">Angel App</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">S.O.S</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(SOS)}
	      	>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(OrthoIllustrated)}
	      	>
	        </Col>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">OrthoIllustrated</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">ReadyNation International</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(ReadyNationInternational)}
	      	>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(GeoFunders)}
	      	>
	        </Col>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">GeoFunders</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">UMC Justice</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(GCBS)}
	      	>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(SalesDashboard)}
	      	>
	        </Col>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">Sales Dasboard</h3>
		        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>
		        <p className="lead">
		          <Link to="/bio" className="btn btn-primary">View My Bio</Link>
		        </p>
	        </Col>
	      </BannerSection>

      </React.Fragment>
    );
  }
}

export default Projects;