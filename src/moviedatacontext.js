import React,{useState,createContext,useEffect} from 'react';


export const Moviecontext= createContext();



export const MovieProvider=(props)=>{
    const [movies,setMovies]=useState([])
    

const fetchdata= async()=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?api_key=d272326e467344029e68e3c4ff0b4059&language=en-US&query=spiderman')
    const movie=await data.json();
    setMovies(movie)
}
    useEffect(()=>{
        
        fetchdata();
           // console.log(movies);
    },[])


    return(
        <Moviecontext.Provider value={[movies,setMovies]}>
            {props.children}
        </Moviecontext.Provider>

    )
}