
import Card from "../common_component/Card";
import axios from "axios";
import { useState } from "react";
import MovieCardArray from "../common_component/MovieCardArray";

function Book() {


  const [search, setSearch] = useState("");
  const [bookdataArr, setbookdataArr] = useState([]);

  const searchbook = async (event) => {
    if (event.key == "Enter") {
      if (search != "") {
        let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
        console.log(res);
        setbookdataArr(res.data.items);
      }
    }
  }



  return (
    <>
      <nav className="navbar1">
        <div className="navbar1-div1">
          <h1>FIND YOUR BOOK HERE</h1>
          <input type="text" placeholder="search book here" value={search} onChange={(e) => { setSearch(e.target.value) }} onKeyPress={searchbook} />
        </div>
      </nav>

      <section className='section1'>

      <MovieCardArray tab="book" CommonArr={bookdataArr}/>

      </section>
    </>
  );
}

export default Book;
