import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MobileGrid from '../components/MobileGrid';
import NavBar from '../components/NavBar';

const TopPicks = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveData = async () => {
      setLoading(true);
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`);
      const result = await response.json();
      setMovies(prevMovies => [...prevMovies, ...result.results]);
      setLoading(false);
    };

    retrieveData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <StyledContainer>
      <NavBar />
      <MobileGrid movies={movies} />
      {loading && <LoadingSpinner>Loading...</LoadingSpinner>}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: #191919;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  color: #fff;
  margin: 20px;
  background-color: #191919;
`;

export default TopPicks;