import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardGrid from '../components/CardGrid'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const TvShows = () => {
    const [shows, setShows] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        const showList = async () => {
            const apiKey = import.meta.env.VITE_API_KEY
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`);
            const result = await response.json();
            setShows(prevShows => prevShows.concat(result.results))
        }
        showList();
    },[page])
  return (
    <StyleSection>
        <NavBar/>
        <h2 className='heading'>Trending Now</h2>
        <CardGrid shows={shows}/>
    </StyleSection>
  )
}

const StyleSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: black;
    min-height: 100vh;
    h2.heading{
      color: white;
      text-align: center;
      margin-top: 60px;
      padding: 20px;
    }
`

export default TvShows;