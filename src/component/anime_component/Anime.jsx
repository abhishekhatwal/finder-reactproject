import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import MovieCardArray from "../common_component/MovieCardArray";

const Anime = () => {
 
    const [popularAnimeArr, setpopularAnimeArr] = useState([]);
    const [latestAnimeArr, setlatestAnimeArr] = useState([]);
    const [Animename, setAnimename] = useState("");
    const [AnimenameArr, setAnimenameArr] = useState([]);
  
    useEffect(()=>{
       displayAnime();
    },[])
  
    let  displayAnime=async()=>{
           let resPopular=await axios.get('https://api.jikan.moe/v4/top/anime');
           let resLatest=await axios.get('https://api.jikan.moe/v4/anime?top_anime_filter=upcoming');
        
            console.log(resLatest);
           setpopularAnimeArr(resPopular.data.data);
          // setlatestAnimeArr(resLatest.data.data)
    }
    const showAnime = async (event) => {
      if (event.key == "Enter") {
        if (Animename != "") {
          let resAnime = await axios.get(`https://api.jikan.moe/v4/anime?q=${Animename}&sfw`);
         console.log(resAnime)
          setAnimenameArr(resAnime.data.data);
        }
      }
    }
  
    return (
      <>
  
      <section className="section1">
     <div className="navbar1-div1">
      <input type="text"  placeholder="search Anime here" value={Animename} onChange={(e)=>{ setAnimename(e.target.value) }} onKeyPress={showAnime} />
      </div> 
       <MovieCardArray tab="anime" CommonArr={AnimenameArr} />
      <h1>popular Anime</h1>
      <MovieCardArray tab="anime" CommonArr={popularAnimeArr} />
      <hr/>
      <h1>latest Anime</h1>
      <MovieCardArray tab="anime" CommonArr={latestAnimeArr} />
      </section>
      </>
    );
  
}

export default Anime;
