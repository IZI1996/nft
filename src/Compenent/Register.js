import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col,Row,Container } from "react-bootstrap";
import {Nav,Navbar} from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { FaCamera } from "react-icons/fa";


class Register extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;

    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  SubmitForm(e) {
    e.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;

    if (email !== "") {
      
      const url = "http://localhost/crudreact/back/reg.php";
      axios.post(
        url,
        JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      );

      this.setState({
        loggedIn: true,
      });
    } else {
      console.log("error");
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/session" />;
    }
    return (
            <div  className="hero-container " style={{ backgroundImage: "url('../images/photo_2021-11-04_14-56-06.jpg')" ,margin:"0px" }}>
      <div className="header1" >
         
      <Container className="dd d-flex justify-content-between">
      <Navbar.Brand className='img mt-3' >
      <img src="../images/output-onlinepngtools (1).png" width="130"  height="60"  className="d-inline-block align-top" alt="NFT logo"/>
            </Navbar.Brand >

                    <Nav className="navbar mt-3">
                        <Nav.Link  className="Navbari" href="/">Home</Nav.Link>
                        <Nav.Link  className="Navbari" href="#About">About</Nav.Link>
                        <Nav.Link  className="Navbari" href="#parent">Menu</Nav.Link>
                        <Nav.Link  className="Navbari" href="#resp">Popular</Nav.Link>
                        <Nav.Link style={{color:"white"}} className='mr-3 btn-get-startedd' href="Login">Login</Nav.Link> 
                        <Nav.Link style={{color:"white"}} className='mr-3 btn-get-startedd' href="Register">Register</Nav.Link> 

                      </Nav>
          </Container>
      <div className="box">
      <div class="square" style={{"--i": 0 }}></div> 
      <div class="square" style={{"--i": 1 }}></div>  
      <div class="square" style={{"--i": 2 }}></div>  
      <div class="square" style={{"--i": 3 }}></div>  
      <div class="square" style={{"--i": 4 }}></div>  
      <Container  >
        <Row>
        <Col className="col-lg-6">
        <img src="../images/telh.png " width="600" height="500" alt="data logo" style={{marginLeft:"70px",marginTop:"-50px"}}/>

        </Col>
  <Col className="col-lg-6 colBlock3" style={{marginTop:"2px",marginLeft:"120px"}}>
          <Form className="d-grid gap-2 mt-5" onSubmit={this.SubmitForm}>

      <Form.Group className="upload" controlId="formBasicEmail">
        <img src="../images/442008112_GLANCING_AVATAR_3D_400.png" width = "170" height = "150" alt=""/>
            <div className="round">
            <Form.Control  type="file"/>     

             <FaCamera style={{color:"white",marginTop:"-6px"}} />
             </div>
                 
             </Form.Group>

   

    


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
                placeholder="Enter Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Link to="/Login">already have an Account ?</Link>
            <Button  className="btn-Register" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
       
        </Row>
        </Container>
        </div>
        </div>
        </div>
    );
  }
}
export default Register;
