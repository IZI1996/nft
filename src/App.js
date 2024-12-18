import { BrowserRouter, Route } from "react-router-dom";
import React, { Component } from "react";
import Insert from "./Compenent/Insert";
import Login from "./Compenent/Login";
import View  from "./Compenent/View";
import Edit  from "./Compenent/Edit";
import Register from "./Compenent/Register";
import Logout from "./Compenent/Logout";
import Session from "./Compenent/Session";
import Test from "./Compenent/Test";
import './App.css';



class App extends Component {
  render() {

    return (

      <BrowserRouter>
          <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/session" component={Session} />
            <Route path="/insert" component={Insert}/> 
            <Route path="/edit/:id" component={Edit}/>
           <Route path="/view" component={View}/>
           <Route path="/" component={Test} exact/>

   

      </BrowserRouter>
    );
  }
}

export default App;
