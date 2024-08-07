import React from 'react'
import { useNavigate } from 'react-router';

const CarousalItem = ({movie}) => {
  const navigate = useNavigate();
  const truncateLine = (text, wordLimit = 20) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
        return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
};
  return (
    <li className="movie--poster" id="poster1">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <div className="content">
            <h2 className="title">{movie.title}</h2>
            <div className="wrapper">
                <p>{truncateLine(movie.overview)}</p>
                <div className="buttons">
                    <button onClick={()=>{navigate(`/movie/${movie.id}`)}}>Details</button>
                </div>
            </div>
        </div>
    </li>
  )
}

export default CarousalItem;