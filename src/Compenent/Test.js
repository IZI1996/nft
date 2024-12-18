import {React,Component }from 'react';
import {Row,Container,Form  ,Col,Button,Nav,Navbar} from 'react-bootstrap';
class Test extends Component {

    render() {

  return (
        <div  className="hero-container " style={{ backgroundImage: "url('../images/photo_2021-11-04_14-56-06.jpg')" ,margin:"0" }}>
     {/************ start Navbar Conntainer **************/}
     <div className='header'>
     <Container className="dd d-flex justify-content-between">
            <Navbar.Brand className='img mt-3' >
            <img src="../images/output-onlinepngtools (1).png" width="130"  height="60"  className="d-inline-block align-top" alt="NFT logo"/>
            </Navbar.Brand >

                    <Nav className="navbar mt-3">
                        <Nav.Link  className="Navbari" href="#Hero">Home</Nav.Link>
                        <Nav.Link  className="Navbari" href="#About">About</Nav.Link>
                        <Nav.Link  className="Navbari" href="#parent">Menu</Nav.Link>
                        <Nav.Link  className="Navbari" href="#resp">Popular</Nav.Link>
                        <Nav.Link style={{color:"white"}} className='mr-3 btn-get-startedd' href="Login">Login</Nav.Link> 
                        <Nav.Link style={{color:"white"}} className='mr-3 btn-get-startedd' href="Register">Register</Nav.Link> 

                      </Nav>
          </Container>
      {/************ end Navbar Conntainer **************/}


      {/************ start Hero Conntainer **************/}

            <Container >
                <Row >

                    <Col className=" col-lg-6   col-xs-12 d-flex flex-column justify-content-center" style={{marginTop:"100px"}}>
                      <h1 >Good Art NFT choices are   good investments. </h1>
                      <p className="mt-3">There is a powerful need for symbolism, 
                      and that means the architecture must have something that 
                      appeals to the human heart
                      and that means the architecture must have something that 
                      appeals to the human heart.</p>
                  
                    <Form inline>
                    <Button className='mt-3 btn-get-started'>Get Started</Button> 
                    </Form>
                    </Col>
                    <Col className="col-lg-6  col-xs-12  imageHome"  style={{marginTop:"7px"}} >
                    <img src="../images/test1.png " width="50%" height="90%" className="blockalign-top block" alt="data logo"/>
                    </Col>

              </Row>
            </Container>
      {/************ end Hero Conntainer **************/}
      </div>
      </div>
  );
    }
}

export default Test;