import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const MobileGrid = ({movies}) => {
  return (
    <StyledContainer>
        {movies.map((movie, index)=>{
            return <Card key={index} movie={movie}/>
        })}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    column-gap: 20px;
    margin-top: 60px;
`

export default MobileGrid