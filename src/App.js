
import "./index.css";
import Book from "./component/book_component/Book";
import Navbar from "./component/common_component/Navbar";
import Movie from "./component/movie_component/Movie";
import NotFound from "./component/common_component/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gossips from "./component/gossips_component/Gossips";
import Tvshow from "./component/tvshow_component/Tvshow";
import Anime from "./component/anime_component/Anime";

function App() {
  return (
   <>
  
  <Navbar />
     <Routes>
      <Route exact path="/" element={<Movie />} />
      <Route exact path="/tvshow" element={<Tvshow />} />
      <Route exact path="/anime" element={<Anime/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/gossips" element={<Gossips />} />
      <Route  element={<NotFound />} />
    </Routes>
   </>
  );
}

export default App;
