import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const TvCard = ({show}) => {
    const navigate = useNavigate();
    const handleClick = (e) =>{
        navigate(`/shows/${show.id}`)
    }
  return (
    <StyledContainer onClick={handleClick}>
        <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="" />
        <h2>{show.name}</h2>
        <p>{show.overview}</p>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: 60px auto;
    grid-template-rows: repeat(2, 1fr);
    color: white;
    column-gap: 10px;
    @media (min-width: 1000px){
        width: 200px;
        height: 300px;
        display: block;
    }
    &:hover{
        background-color: #636363;
    }
    img{
        height: 100%;
        width: 60px;
        object-fit: cover;
        grid-row: 1/ 3; 
        @media (min-width: 1000px){
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    h2{
        font-size: 1.1rem;
        margin-top: 4px;
        @media (min-width: 1000px){
            display: none;
        }
    }
    p{
        margin-bottom: 8px;
        font-size: 0.8rem;
        color: #bfbfbf;
        overflow-y: hidden;
        @media (min-width: 1000px){
            display: none;
        }
    }
`

export default TvCard