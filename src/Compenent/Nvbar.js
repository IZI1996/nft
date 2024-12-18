

import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Nvbar extends Component {

      
  render() {
 
    return (
      <>
  <Container className="dd d-flex justify-content-between">
  <Navbar.Brand className='img mt-3' >
  <img src="../images/output-onlinepngtools (1).png" width="130"  height="60"  className="d-inline-block align-top" alt="NFT logo"/>
            </Navbar.Brand >

                    <Nav className="navbar mt-3">
                        <Nav.Link  className="Navbari" href="/">Home</Nav.Link>
                        <Nav.Link  className="Navbari" href="/Insert">insert</Nav.Link>
                        <Nav.Link  className="Navbari" href="/View">View</Nav.Link>
                        <Nav.Link style={{color:"white"}} className='mr-3 btn-get-startedd' href="logout">Log-out</Nav.Link> 

                      </Nav>
          </Container>
      </>
    );
  }
}
export default Nvbar;
