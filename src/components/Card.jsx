// Card.js
import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';

const Card = ({movie}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  
  return (
    <StyledContainer onClick={handleClick}>
    {console.log(movie)}
      <div className="image">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      </div>
      <p><span>Rating: {movie.vote_average}★</span><span>({movie.vote_count})</span></p>
      <h4>{movie.title}</h4>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    min-width: 200px;
    max-width: 200px;
    height: 300px;
    padding: 10px;
    color: white;
    margin-right: 10px;
    .image{
      width: 100%;
      height: 230px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover; 
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 6px white;
      }
    }
    h4{
      font-weight: 400;
      margin-top: 5px;
      text-transform: capitalize;
      letter-spacing: 1px;
      font-size: 14px;
    }
    p{
      font-size: 12px;
      font-weight: 200;
      color: #c6c6c6;
      letter-spacing: 2px;
      margin-top: 5px;
      span{
        &:last-child{
          font-size: 10px;
        }
      }
    }
`
export default Card
