import React, { Component } from "react";
import axios from "axios";
import Listuser from './Listuser';
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row } from "react-bootstrap";
import Nvbar from "./Nvbar";

import {Nav,Navbar} from 'react-bootstrap';

class View extends Component {
  constructor(props) {
    super(props);


    this.state = {
      utilisateur: []
    };
   
  }
  componentDidMount(){
  axios.get("http://http://localhost/disgn/back/select.php")
  .then(res =>{
    console.table(res.data)
    this.setState({
      utilisateur: res.data
    });


  })
  .catch(err =>{
    console.log(err)
  })

  }

  List(){
    return this.state.utilisateur.map(obj=>{
       return <Listuser object={obj} />;
    });
  }


  render() {
    return (
      <>
         <div  className="hero-container " style={{ backgroundImage: "url('../images/photo_2021-11-04_14-56-06.jpg')" ,margin:"0px" }}>
      <div className="header1" >
    <Nvbar />
<Container>

<Table striped bordered hover>

  <thead>
    <tr>
      <th>Username</th>
      <th>email</th>
      <th>job</th>
      <th>tel</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
  {this.List()}

  </tbody>
</Table>
</Container>       
        </div>
        </div>
      </>
    );
  }
}
export default View;
