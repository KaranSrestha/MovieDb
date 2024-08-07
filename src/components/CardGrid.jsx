import React from 'react'
import TvCard from './TvCard'
import styled from "styled-components"

const CardGrid = ({shows}) => {
  return (
    <StyledGrid>
        {shows.map((show, index) => {
            console.log(show);
            return <TvCard key={index} show={show}/>
        })}
    </StyledGrid>
  )
}

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 15px;
    gap: 20px;
    margin: 10px;
    @media (min-width: 1340px){
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;
        row-gap: 20px;
    }
    @media (min-width: 1101px) and (max-width: 1339px){
        grid-template-columns: repeat(5, 1fr);
        row-gap: 40px;
    }
    @media (min-width: 1000px) and (max-width: 1100px){
        grid-template-columns: repeat(4, 1fr);
        row-gap: 40px;
    }
`
export default CardGrid