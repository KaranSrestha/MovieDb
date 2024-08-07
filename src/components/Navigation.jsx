import React from 'react'
import Carousal from './Carousal'
import NavBar from './NavBar'

const Navigation = ({movies}) => {
  return (
    <header>
        <NavBar/>
        <Carousal
          movies = {movies}
        />
    </header>
  )
}

export default Navigation