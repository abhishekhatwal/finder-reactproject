// Home.js
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCardArray from "../common_component/MovieCardArray";

const Movie = () => {

  const [popularmovieArr, setpopularmovieArr] = useState([]);
  const [latestmovieArr, setlatestmovieArr] = useState([]);
  const [movieName, setmovieName] = useState("");
  const [movieNameArr, setmovieNameArr] = useState([]);

  useEffect(()=>{
     displayMovies();
  },[])

  let  displayMovies=async()=>{
         let resPopular=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0');
         let resLatest=await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0');
      
        // console.log(resPopular);
         setpopularmovieArr(resPopular.data.results);
         setlatestmovieArr(resLatest.data.results)
  }

  const showMovie = async (event) => {
    if (event.key == "Enter") {
      if (movieName != "") {
        let resMovie = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0&query='+movieName);
       
        setmovieNameArr(resMovie.data.results);
      }
    }
  }

  return (
    <>

    <section className="section1">
   <div className="navbar1-div1">
    <input type="text"  placeholder="search movies here" value={movieName} onChange={(e)=>{ setmovieName(e.target.value) }} onKeyPress={showMovie} />
    </div> 
     <MovieCardArray tab="movie" CommonArr={movieNameArr} />
    <h1>popular movies</h1>
    <MovieCardArray tab="movie" CommonArr={popularmovieArr} />
    <hr/>
    <h1>latest movies</h1>
    <MovieCardArray tab="movie" CommonArr={latestmovieArr} />
    </section>
    </>
  );
};

export default Movie;