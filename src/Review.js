import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import {Moviecontext} from './moviedatacontext';
import {BrowserRouter,Route,Switch,Link,useHistory} from 'react-router-dom'



export default function Review(){
    const [movies,setMovies]=useContext(Moviecontext)
    const history=useHistory();
    function handleclick(e,title){
        
        const path='/movies/'+title
        history.push(path)
    }
    return(
       <>
       <BrowserRouter>
       <div className="review-cards" >
           {movies.results?movies.results.map((movies,i)=>{return(
                <div className="cards" key={movies.id}>
           <Card style={{ width: '18rem' , height:'fit-content'}}>
            <Card.Img variant="top" src={'http://image.tmdb.org/t/p/w185'+movies.poster_path} style={{height:'20vh'}} />
            <Card.Body>
            <Card.Title>{movies.title} </Card.Title>
            <Card.Text>
                {movies.overview.substring(0,100)}
            </Card.Text>
             <a href={'/movie/#/'+movies.id}> see more</a>
        </Card.Body>
        </Card>
        </div>)}):"loading"}
        </div>
      
      
       </BrowserRouter>
       </>
    )
}