import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";
import TrendingNow from "./pages/TrendingNow";
import TopPicks from "./pages/TopPicks";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path="/shows" element = {<TvShows/>}></Route>
        <Route path = "/movie/:id" element = {<Details/>}></Route>
        <Route path = "/trending" element = {<TrendingNow/>}></Route>
        <Route path = "/topPicks" element = {<TopPicks/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
