import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import GenrePage from "./GenrePage";
import AnimeGenre from "./AnimeGenre";
import AnimeName from "./AnimeName";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genrepage" element={<GenrePage />} />
          {<Route path="/profile" element={<Profile />} />}
          <Route path="/animegenre" element={<AnimeGenre />} />
          <Route path="/anime/:malId" element={<AnimeName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
