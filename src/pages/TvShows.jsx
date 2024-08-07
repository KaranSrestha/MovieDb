import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardGrid from '../components/CardGrid';
import NavBar from '../components/NavBar';

const TvShows = () => {
    const [shows, setShows] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const showList = async () => {
            setLoading(true); 
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`);
            const result = await response.json();
            setShows(prevShows => prevShows.concat(result.results));
            setLoading(false); 
        };
        showList();
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
        <StyleSection>
            <NavBar />
            <h2 className='heading'>Trending Now</h2>
            <CardGrid shows={shows} />
            {loading && <Loader>Loading...</Loader>}
        </StyleSection>
    );
}

const StyleSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: black;
    min-height: 100vh;
    h2.heading {
        color: white;
        text-align: center;
        margin-top: 60px;
        padding: 20px;
    }
`;

const Loader = styled.div`
    color: white;
    font-size: 1.5rem;
    margin: 20px;
    text-align: center;
`;

export default TvShows;
