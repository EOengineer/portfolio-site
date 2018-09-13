import React, { Component } from 'react';

import { Container } from 'reactstrap';

class Content extends Component {

	// For now this component is doing much, but may eventually function an an intermediary component.
  render() {
    return (
      <React.Fragment>
        {this.props.children}
     	</React.Fragment>
    );
  }
}

export default Content;