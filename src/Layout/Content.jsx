import React, { Component } from 'react';

import { Container } from 'reactstrap';

class Content extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

export default Content;