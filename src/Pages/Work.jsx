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

class Work extends Component {

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
	      	heading="Work"
	      	subHeading="View examples of my completed professional work."
	      />

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">S.O.S</h3>
		        <p className="lead">Surgical Outcomes System (SOS) is a medical outcomes monitoring system that allows physicians to monitor the well-being of their patients through the post surgery recovery process.</p>
		        <p className="lead">
		          <a href="https://www.surgicaloutcomessystem.com" target="_blank" className="btn btn-primary">Visit</a>
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
		        <p className="lead">OrthoIllustrated (OI) is a medical and anatomical educational resource for physicians and prospective patients interested in learning more about medical devices and procedures.</p>
		        <p className="lead">
		          <a href="https://www.orthoillustrated.com/" target="_blank" className="btn btn-primary">Visit</a>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">ReadyNation International</h3>
		        <p className="lead">ReadyNation International is an informational site cataloging policy and news related to early childhood development in the US and around the world.</p>
		        <p className="lead">
		          <a href="https://www.readynationinternational.org/" target="_blank" className="btn btn-primary">Visit</a>
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
		        <p className="lead">Geofunders serves as a networking resource for philanthropists, grantmakers, and the broader non-prophit and philantropy communities. </p>
		        <p className="lead">
		          <a href="https://www.geofunders.org/" target="_blank" className="btn btn-primary">Visit</a>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">UMC Justice</h3>
		        <p className="lead">UMC Justice is a politial action and outreach site for the United Methodist Church, specializing in issues of social justice.</p>
		        <p className="lead">
		          <a href="https://www.umcjustice.org/" target="_blank" className="btn btn-primary">Visit</a>
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
	      		style={this.imageStyle(AngelApp)}
	      	>
	        </Col>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">Angel App</h3>
		        <p className="lead">The Angel calculator app is a validated tool assisting medical staff in effective use of the Arthrex Angel System.  The calculator performs lookup functionality to allow proper machine settings for a specified platelet-rick plasma (PRP) output formulation.</p>
		        <p className="lead">
		          <a href="https://angelapp.arthrex.com/logins/new?redirect_to=%2F" target="_blank" className="btn btn-primary disabled">Login Required</a>
		        </p>
	        </Col>
	      </BannerSection>

	      <BannerSection bannerStyle={bannerStyle}>
	      	<Col sm="12" md="6">
		      	<h3 className="display-3">Sales Dashboard</h3>
		        <p className="lead">The Caterease Sales Dashboard allows Caterease enterprise customers to view their sales and item usage numbers through via a web portal using a series of charts and responsive tables.</p>
		        <p className="lead">
		          <a href="" target="_blank" className="btn btn-primary disabled">Login Required</a>
		        </p>
	        </Col>
	      	<Col 
	      		sm="12" 
	      		md="6" 
	      		style={this.imageStyle(SalesDashboard)}
	      	>
	        </Col>
	      </BannerSection>

      </React.Fragment>
    );
  }
}

export default Work;