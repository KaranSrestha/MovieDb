import React, { useEffect , useState} from 'react'
import Navigation from '../components/Navigation'
import styled from "styled-components"
import Title from '../components/Title'
import CardRow from '../components/CardRow'
import Footer from '../components/Footer'

const Home = () => {
  const [topFourMovies, setTopFourMovies] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(()=>{
    const loadApi = async () => {
      try{
        const apiKey = import.meta.env.VITE_API_KEY
        const response_1 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
        const result_1 = await response_1.json();
        setTopFourMovies(result_1.results.slice(0,4));   
        setTopPicks(result_1.results.slice(4,11));
        const response_2 = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
        const result_2 = await response_2.json();
        setTrending(result_2.results.slice(0, 7));     
      }catch(e){
        console.log(e);
      }
    }
    loadApi();
  },[])
  return (
    <StyledContainer>
        <Navigation
          movies={topFourMovies}
        />
        <Title
          text="Top Picks"
        />
        <CardRow
          movies={topPicks}
          movieType={1}
        />
        <Title
          text="Trending Now"
        />
        <CardRow
          movies={trending}
          movieType={2}
        />
        <Footer/>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: #191919;
  flex-direction: column;
`

export default Home