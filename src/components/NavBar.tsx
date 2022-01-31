import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/esm/Navbar';
import logo from '../assets/logo192.png';

export class NavBar extends Component {
  render() {
    return <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Stressy
          </Navbar.Brand>
          <Nav className="justify-content-end">
            {/* <Nav.Link href="/#/privacy">Privacy Policy</Nav.Link> */}
            {/* <Nav.Link href="/#/donwload">Download</Nav.Link> */}
            <Nav.Link href="https://github.com/Minituff/Stressy">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>;
  }
}

export default NavBar;
