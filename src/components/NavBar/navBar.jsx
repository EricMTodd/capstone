import React, { Component } from 'react';
import './navBar.css';
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
          <Navbar className="navBar" light expand="md">
            <NavbarBrand href="/"><span className="navText" >fragtrak</span></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/games/csgo" tag={RRNavLink} ><span className="navText" >CS:GO</span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/games/overwatch" tag={RRNavLink} ><span className="navText" >Overwatch</span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/games/dota2" tag={RRNavLink} ><span className="navText" >Dota 2</span></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }


  export default NavBar;