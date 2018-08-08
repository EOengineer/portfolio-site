import React, { Component } from 'react';
import { Link, NavLink as RNavLink } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Nav">
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/bio">Bio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/technology">Technology</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/music">Music</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;