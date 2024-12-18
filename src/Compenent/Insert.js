import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col } from "react-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nvbar from "./Nvbar";

class Insert extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false;
    
        this.state = {
          username: "",
          job: "",
          email: "",
          tel: "",
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
        const job = this.state.job;
        const tel = this.state.tel;
    
        if (email !== "") {
          
          const url = "http://localhost/crudreact/back/insert.php";
          axios.post(
            url,
            JSON.stringify({
              username: username,
              email: email,
              job: job,
              tel: tel
            })
          ).then(res=>{
            if(res.status==200){
            
              alert(res.data.message)
              this.setState({
                username: "",
                email: "",
                job: "",
                tel:""
              });
            }else{
              console.log("error");
            }
   
          })
    


        }}
      
  render() {
 
    return (
      <>
<div  className="hero-container " style={{ backgroundImage: "url('../images/photo_2021-11-04_14-56-06.jpg')" ,margin:"0px" }}>
      <div className="header1" >               
<Nvbar />
          <Container className="colBlock4" style={{marginTop:"10px",marginLeft:"230px"}}>
         
<Form className="d-grid gap-2 " onSubmit={this.SubmitForm}>
<h2 className="H1 mt-3">Insert Form</h2>

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
                type="job"
                name="job"
                onChange={this.onChange}
                value={this.state.job}
                placeholder="job"
                required
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
            
              <Form.Control
                type="tel"
                name="tel"
                onChange={this.onChange}
                value={this.state.tel}
                placeholder="tel"
                required
              />
            </Form.Group>

            <Button className="btn-get-started  " style={{marginTop:"-10px"}} type="submit">
              Submit
            </Button>
          </Form>
          </Container>
          </div>
          </div>
      </>
    );
  }
}
export default Insert;
