import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
const Gossips = () => {
    
    const [newsArr, setnewsArr] = useState([]);

  useEffect(()=>{
    displayNews();
 },[])

 let  displayNews=async()=>{
    let resNews=await axios.get('https://newsapi.org/v2/everything?q=movies%20OR%20TVshows%20OR%20anime&apiKey=427d562937c5441d88c43e7365decc04');
    
    console.log(resNews);
 
    setnewsArr(resNews.data.articles);
    
}

  return (

    <>
    <section className="section1">
    <h1>find latest Gossips</h1>
    <div className="section1-container1">
    
   {newsArr.map((value)=>{
 if(value.urlToImage!=undefined&&value.content!=undefined)
 return <div className='news-card-container'>
            <div className='news-card-div'>
                <img src={value.urlToImage} alt="img" />
                <div className='title-div'>
                    <h3>{value.title}</h3>
                    <hr/>
                    <p>{value.content}</p>
                   <a href={value.url} target='_blank'>click more</a> 
                </div>
            </div>
        </div>


   })}
    
    </div>
    </section>
    </>
  )
}

export default Gossips;
