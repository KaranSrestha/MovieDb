import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        if (!response.ok) {
          throw new Error('Movie not found');
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.log(error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error: {error}</p>;
  }
  
  return (
    <StyledContainer>
      <NavBar/>
      <div className='space'></div>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="info">
        <h1>{movie.title}</h1>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}★ ({movie.vote_count} votes)</p>
        <p><strong>Overview:</strong> {movie.overview}</p>
        <p id="genre"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #191919;
  min-height: 100vh;
  @media (min-width: 1030px){
    flex-direction: row;
    gap: 50px;
  }
  .space{
    height: 70px;
  }
  .poster {
    width: 300px;
    height: 450px;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0px 0px 6px white;
    }
  }
  
  .info {
    text-align: center;
    max-width: 800px;
    position: relative;
    @media (min-width: 1030px){
        text-align: left;
    }
    
    
    h1 {
      font-size: 2rem;
      margin-top: 20px;
      @media (min-width: 1030px){
        position: absolute;
        top: -5rem;
      }
    }
    
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-top: 25px;
      
      strong {
        font-weight: 600;
      }
    }
    #genre{
      @media (min-width: 1030px){
        position: absolute;
        bottom: -50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export default Details;
