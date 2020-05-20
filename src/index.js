import React,{useContext} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import HomePage from './homepage';
import {MovieProvider} from './moviedatacontext';
import {Container,Row,Col} from 'react-bootstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Review from './Review';
import {Moviecontext} from './moviedatacontext';
import MovieComp from './moviecomp';
function Main(){
     
     
    return(
        <div>
            <BrowserRouter>
            <MovieProvider>
            <Container fluid>
                <Col><NavBar/></Col>
              <Route exact strict path='movie/'><Col><HomePage/></Col></Route>  
              <Route exact strict path='movie/review'><Col><Review/></Col></Route> 
              <Route exact strict path='movie/search'></Route>
              <Route exact  path='movie/movies/:id'><Col><MovieComp/></Col></Route> 

            </Container>
            


            </MovieProvider>
            </BrowserRouter>
        </div>
    )
}


render(<Main/>,document.getElementById('root'));

