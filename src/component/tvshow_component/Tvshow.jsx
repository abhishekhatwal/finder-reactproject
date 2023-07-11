import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import MovieCardArray from "../common_component/MovieCardArray";

const Tvshow = () => {
 
    const [popularTvshowArr, setpopularTvshowArr] = useState([]);
    const [latestTvshowArr, setlatestTvshowArr] = useState([]);
    const [Tvshowname, setTvshowname] = useState("");
    const [TvshownameArr, setTvshownameArr] = useState([]);
  
    useEffect(()=>{
       displayTvshow();
    },[])
  
    let  displayTvshow=async()=>{
           let resPopular=await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0&language=en-US');
           let resLatest=await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0&language=en-US');
        
          console.log(resPopular);
           setpopularTvshowArr(resPopular.data.results);
           setlatestTvshowArr(resLatest.data.results)
    }
  
    const showTvshow = async (event) => {
      if (event.key == "Enter") {
        if (Tvshowname != "") {
          let resTvshow = await axios.get('https://api.themoviedb.org/3/search/tv?api_key=5b28a0b934b0f8cfa3bf7bd6675acfc0&query='+Tvshowname);
         
          setTvshownameArr(resTvshow.data.results);
        }
      }
    }
  
    return (
      <>
  
      <section className="section1">
     <div className="navbar1-div1">
      <input type="text"  placeholder="search Tvshow here" value={Tvshowname} onChange={(e)=>{ setTvshowname(e.target.value) }} onKeyPress={showTvshow} />
      </div> 
       <MovieCardArray tab="tvshow" CommonArr={TvshownameArr} />
      <h1>popular Tvshow</h1>
      <MovieCardArray tab="tvshow" CommonArr={popularTvshowArr} />
      <hr/>
      <h1>latest Tvshow</h1>
      <MovieCardArray tab="tvshow" CommonArr={latestTvshowArr} />
      </section>
      </>
    );
  
}

export default Tvshow;
