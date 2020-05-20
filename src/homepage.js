import React,{useContext} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Moviecontext} from './moviedatacontext';

export default function Homepage(){
     const [movies,setMovies]=useContext(Moviecontext)
     
     
    return(
        <>
       <Container>
           <Col><h1>welcome to movies for you</h1></Col>
           <Col><p> movies for you.com is india's no1 movie review site .which is used by millions of users in and across india</p></Col>
       </Container> 

       <Container>
           <Col><h1>Datas for users</h1></Col>
           <Col>we have a collection of reviews of {movies.total_result} movies </Col>
           <Col>our list of movie reviews</Col>
           <Col>  {movies.results?movies.results.map((movies,i)=>{return(<li key={i}>{movies.title}</li>)}):"loading"}</Col>
       </Container>
       </>
    )
}