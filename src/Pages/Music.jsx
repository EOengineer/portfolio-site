import React, { Component } from 'react';

import Hero from '../Layout/Hero';
import AudioImage from '../Images/AudioImage.jpg';

class Music extends Component {
  render() {
    return (
      <React.Fragment>
      	<Hero
	      	heroStyle={{
						background: `url(${AudioImage}) no-repeat center center`,
						backgroundSize: 'cover',
						marginBottom: 0,
						textAlign: 'left'
					}}
					position={{size: 5, offset: 1}}
	      	heading="Music & Audio"
	      	subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."
	      	buttonCTA="View My Work"
	      	buttonUrl="/projects"
	      />

      </React.Fragment>
    );
  }
}

export default Music;