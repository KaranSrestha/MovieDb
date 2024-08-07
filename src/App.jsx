import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import TvShows from "./pages/TvShows";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path="/shows" element = {<TvShows/>}></Route>
        <Route path = "/movie/:id" element = {<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
