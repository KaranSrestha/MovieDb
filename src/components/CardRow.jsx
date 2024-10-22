import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const CardRow = ({ movies = [] , movieType}) => {
  const navigate = useNavigate();
  const handleClick = (e) =>{
    if(movieType == 1){
      navigate("/topPicks")
    }
    else if(movieType == 2){
      navigate("/trending")
    }
  }
  return (
    <StyledSection>
      {movies.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
      <div className="button">
        <button onClick={handleClick}><i className='fa-solid fa-chevron-right'></i></button>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
    display: flex;
    overflow-x: scroll;
    padding: 10px;
    align-items: center;
    position: relative;
    &::-webkit-scrollbar {
      height: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #cccccc; 
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
    .button{
        transform: translateY(-50%);
        button{
            width: 40px;
            height: 40px;
            border: none;
            outline: none;
            background: transparent;
            color: white;
            font-size: 1.4rem;
            border-radius: 50%;
            &:hover{
                background-color: #858585;
            }
        }
    }

`;

export default CardRow;
