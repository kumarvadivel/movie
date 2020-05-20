 import React,{useContext} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {Moviecontext} from './moviedatacontext';


export default function NavBar(props){

    const [movies,setMovies]=useContext(Moviecontext)
    
    return(
        
        <Container fluid='xs'>
            <Row>
                <Col>
                <Navbar bg="dark" variant="dark">
     <Navbar.Brand href="/movie/movie">MoviesForYou</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/review">Reviews</Nav.Link>
      
      
      
    </Nav>
   
  </Navbar>
 
  
                </Col>
                
            </Row>
        </Container>
    )
}