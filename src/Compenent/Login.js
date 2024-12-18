import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col,Container,Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar} from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";



var status;
class LoginUser extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;

    this.state = {
      email: "",
      password: "",
      loggedIn,
      token:''
    };
    this.onChange = this.onChange.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  // get req data in the link

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  SubmitForm(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if (email !== "") {

    const data ={
      email:email,
      password:password
    }
    axios.post("http://localhost/crudreact/back/log.php",data)
    .then(res =>{
      if(res.status === 200 && res.data.jwt  ){
 console.log(res)
        let dataa=JSON.stringify(res.data.user);
        console.log(dataa)

        let jwt = res.data.jwt;
        localStorage.setItem("data",dataa);
        localStorage.setItem("access_token", jwt);
        this.setState({
          loggedIn: true,
        });
      }
    })
    .catch(err =>{
      console.log(err)
    })


   
    }
  }



  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/session" />;
    }
    return (
      <div  className="hero-container " style={{ backgroundImage: "url('../images/photo_2021-11-04_14-56-06.jpg')" ,margin:"0" }}>
      <div className="header1" >
        <div className="box">
      <div class="square" style={{"--i": 0 }}></div> 
      <div class="square" style={{"--i": 1 }}></div>  
      <div class="square" style={{"--i": 2 }}></div>  
      <div class="square" style={{"--i": 3 }}></div>  
      <div class="square" style={{"--i": 4 }}></div>  

 
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

{/* <hr></hr> */}

      <Container>
      <Row className="blockLogin1">
      <Col className="col-lg-6" >
                    <img src="../images/loginImage.png " width="900" height="500" alt="data logo" style={{marginLeft:"-140px",marginTop:"-150px"}}/>
       </Col>

        <Col className="col-lg-6 colBlock2"style={{marginTop:"-150px",marginLeft:"120px"}}>



          <Form onSubmit={this.SubmitForm} className="d-grid gap-2 mt-5">

           <h2 className="H1">Login Form</h2>
            <Form.Group className="input-group col-lg-12 mb-4 col-xs-3" controlId="formBasicEmail">
         
              <Form.Control
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                type="email"
                placeholder="Enter email"
                required
                className="form-control bg-white border-left-0 border-md"

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                type="password"
                placeholder="Password"
                className="form-control bg-white border-left-0 border-md"
                required
              />
            </Form.Group>
           <span>Don't have an account ? </span> <Link to="/reg">  Sign up </Link>
            <Button type="submit" className="btn-get-started mt-4">
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
export default LoginUser;
