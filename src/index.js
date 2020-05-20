import React,{useContext} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import HomePage from './homepage';
import {MovieProvider} from './moviedatacontext';
import {Container,Row,Col} from 'react-bootstrap';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Review from './Review';
import {Moviecontext} from './moviedatacontext';
import MovieComp from './moviecomp';
function Main(){
     
     
    return(
        <div>
            <HashRouter>
            <MovieProvider>
            <Container fluid>
                <Col><NavBar/></Col>
                <Switch>
              <Route exact  path='/'><Col><HomePage/></Col></Route>  
              <Route exact  path='/review/'><Col><Review/></Col></Route> 
             <Route exact  path='/:id'><Col><MovieComp/></Col></Route> 
                </Switch>
            </Container>
            


            </MovieProvider>
            </HashRouter>
        </div>
    )
}


render(<Main/>,document.getElementById('root'));

