import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };
  const toggleSearch = ()=>{
    setSearchOpen(!searchOpen);
  }
  const handleChange= async (e) => {
    const query = e.target.value;
    setMovieName(query);

    if (query === '') {
        setSearchResult([]);
        return;
    }
    try{
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
      const result = await response.json();
      setSearchResult(result.results);
      
    }catch(e){
      console.log(e);
    }
  }
  return (
    <StyledNavContainer>
      <div className="menuIcon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className={`menu--collapsable ${navOpen ? 'open' : ''}`}>
        <li>
          <span id="menu">Menu</span>
          <i className="fa-solid fa-x" onClick={toggleMenu}></i>
        </li>
        <li onClick={()=>{navigate("/")}}>Home</li>
        <li onClick={()=>{navigate("/shows")}}>TV Shows</li>
      </ul>
      <h2 className='logo'>MovieDB</h2>
      <div className="navItems">
        <ul>
          <li onClick={()=>{navigate("/")}}>Home</li>
          <li onClick={()=>{navigate("/shows")}}>TV Shows</li>
        </ul>
      </div>
      <div className="searchContainer">
        <button onClick={toggleSearch}><i className={searchOpen?"fa-solid fa-x":"fa-solid fa-magnifying-glass"}></i></button>
        <div className={searchOpen?'search--bar search--appear':'search--bar search--disappear'}>
          <input type="text" placeholder='Enter Movie name to search' value={movieName} onChange={handleChange}/>
          <ul className="searchResults">
            {searchResult.map(result=>{
              return <li onClick={()=>navigate(`/movie/${result.id}`)}> 
                        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}/>
                        <span>{result.title}</span>
                     </li>
            })}
          </ul>
        </div>
      </div>
    </StyledNavContainer>
  );
};

const StyledNavContainer = styled.nav`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #1b1b1b;
  position: fixed;
  padding: 17px 20px;
  z-index: 3;
  width: 100%;
  box-shadow: 0 2px 2px #141414;
  top: 0;
  .menuIcon {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .menu--collapsable {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 80%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #000000ec;
    list-style: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateX(-100%);
    opacity: 0;

    li:first-child {
      padding: 20px;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid white;
    }

    li:nth-child(n+2) {
      padding: 20px 20px;
      &:hover {
        background-color: #ffffff79;
      }
    }

    &.open {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .logo {
    margin: 0;
  }

  .navItems {
    display: none;

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;

      li {
        margin-left: 20px;
      }
    }
  }

  .searchContainer {
    width: 50px;
    height: 50px;
    margin-top: auto;
    position: relative;
    button {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      margin-left: 20px;
    }
    .search--bar{
      position: absolute;
      bottom: -45px;
      right: -18px;
      height: 45px;
      opacity: 0;
      transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
      .searchResults{
        position: absolute;
        top: 45px;
        list-style: none;
        width: 100%;
        background-color: #000000;
        margin-top: 5px;
        max-height: 200px;
        overflow-y: scroll;
        li{
          color: white;
          width: 100%;
          cursor: pointer;
          display: flex;
          padding: 5px 0;
          border-bottom: 1px solid #a8a8a8;
          &:hover{
            background-color: #6b6b6b;
          }
          img{
            width: 40px;
            height: 60px;
            object-fit: cover;
            margin-left: 10px;
          }
          span{
            display: flex;
            align-items: center;
            margin-left: 10px;
          }
        }
      }
      input{
        height: 100%;
        width: 300px;
        padding-left: 12px;
        border-radius: 4px;
        border: none;
        font-size: 1rem;
      }
      @media (max-width: 500px){
        width: 95vw;
        margin-right: 7px;
        input{
          width: 100%;
        }
      }
    }
    .search--appear{
      transform: translatex(0%);
      opacity: 1;
    }
    .search--disappear{
      transform: translatex(300%);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    .menuIcon {
      display: block;
    }

    .logo {
      flex-grow: 1;
      text-align: center;
    }

    .navItems {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .menuIcon {
      display: none;
    }

    .menu--collapsable {
      display: none;
    }

    .logo {
      margin-right: auto;
      height: 100%;
    }

    .navItems {
      display: flex;
      margin-right: 30px;
      gap: 10px;
      align-items: center;
      li{
        padding: 10px 20px;
        font-size: 18px;
        &:hover{
          background-color: #ffffff48;
          cursor: pointer;
        }
      }
    }
  }
`;

export default NavBar;
