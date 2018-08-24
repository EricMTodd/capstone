import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
    import { NavLink as RRNavLink } from 'react-router-dom';
  
class NavBar extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">fragtrak</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/games" tag={RRNavLink} >Games</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/tournaments" tag={RRNavLink} >Tournaments</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/matches" tag={RRNavLink} >Matches</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/teams" tag={RRNavLink} >Teams</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/players" tag={RRNavLink} >Players</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


  export default NavBar;