import React from 'react'
import Card from './Card';
const MovieCardArray = ({tab,CommonArr}) => {
    
  return (
    
    <div className="section1-container1">
    {CommonArr.map((value)=>{


let title="";
let img="";
let rate="";
let desc="";
let date="";
let publisher="";
let link="";
let author="";

        if(tab==="movie")
     { 
     let baseURL = "https://image.tmdb.org/t/p/w500";
       title=value.original_title;
       img=`${baseURL}${value.poster_path}`;
       rate=value.vote_average;
       desc=value.overview;
       date=value.release_date;
    }
       else if(tab==="tvshow")
     { 
     let baseURL = "https://image.tmdb.org/t/p/w500";
       title=value.name;       ;
       img=`${baseURL}${value.poster_path}`;
       rate=value.vote_average;
       desc=value.overview;
       date=value.first_air_date;
       
    }
       else if(tab==="anime")
     { 
       title=value.title;
       img=value.images.jpg.image_url;
       rate=value.score;
       desc=value.synopsis;
       date=value.aired.from;
       link=value.url;
       
    }
    else if(tab==="book"){
             img = value.volumeInfo.imageLinks && value.volumeInfo.imageLinks.smallThumbnail;
             title = value.volumeInfo.title;
             rate = value.saleInfo.listPrice && value.saleInfo.listPrice.amount;
             publisher = value.volumeInfo.publisher;
             link = value.volumeInfo.previewLink;
             desc = value.volumeInfo.description;
            author = value.volumeInfo.authors;
             date= value.volumeInfo.publishedDate;
    }

          return <Card title={title} img={img} rate={rate} desc={desc} date={date} publisher={publisher} link={link} author={author}/>
    })}
  </div>
  )
}

export default MovieCardArray;
