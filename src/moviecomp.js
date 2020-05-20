import React,{useContext,useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './index.css';
import {Moviecontext} from './moviedatacontext';

export default function MovieComp(){
let { id } = useParams();

 const [movies,setMovies]=useContext(Moviecontext)
 const [des,setdes]=useState()
 const [title,settitle]=useState()
 const [popularity,setpopularity]=useState()
 const [language,setlanguage]=useState()
 const [release,setrelease]=useState()
 const [votecount,setvote]=useState()
 const [poster,setposter]=useState()
 const [backdrop,setdrop]=useState()
 const [adult,setadult]=useState()

   
    useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setadult(movie.adult)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })

   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setlanguage(movie.original_language)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        settitle(movie.title)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setdes(movie.overview)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setrelease(movie.release_date)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setvote(movie.vote_count)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
    useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setposter(movie.poster_path)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
    useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setdrop(movie.backdrop_path)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
   useEffect(()=>{
       if(movies.results){
            movies.results.map((movie)=>
                    {return(movie.id==id? 
                        setpopularity(movie.popularity)
                        :console.log("no"))
    })}
    else{
        console.log()
    }
   })
    return(
        <div>
           <div className="movie-container">
               <div>
                <img src={'http://image.tmdb.org/t/p/w185/'+poster} alt="image" className="img-container"/>
             </div>
             <div className="info">
                 <div className="inf-item"><h1>{title}</h1></div>
                
              <div className="inf-item">
                   <div className="inf-item-li"><h5>Popularity:</h5></div>
                 <div className="inf-item-li"> <p>{popularity}%</p></div>
                  </div>
          
              <div className="inf-item"> 
              <div className="inf-item-li"> <h5>Release date:</h5></div>
              <div className="inf-item-li"> <p>{release}</p></div>
               </div>
              <div className="inf-item">  
               <div className="inf-item-li"> <h5>Votes:</h5></div>
               <div className="inf-item-li"> <p>{votecount} votes</p></div>
                </div>

              <div className="inf-item">
                  <div className="inf-item-li">
                       <h5>Language:</h5></div>
                   <div className="inf-item-li"><p>{language==="en"?"English":language}</p></div>
               
                  </div>
                 <div className="inf-item">
                 <div className="inf-item-li"><h5>PG-rating:</h5></div>
                   <div className="inf-item-li"> <p>{adult?"18+":'13+'}</p></div>
                    </div>
              <div className="inf-item">
                   <div className="inf-item-li"> <h5>Overview:</h5></div>
                   <div className="inf-item-li">  <p>{des===""?"this movie has no overview":des}</p></div>
                    </div> 
              </div>
               </div> 
        </div>
    )

} 