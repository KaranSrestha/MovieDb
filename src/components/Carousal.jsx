import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import CarousalItem from './CarousalItem';

const Carousal = ({movies}) => {
    const [translate, setTranslate] = useState(0);

    useEffect(() => {
        if(movies.length>0){
            const interval = setInterval(() => {
                handleRightClick();
            }, 3000);
            return () => clearInterval(interval);
            }
    }, [translate, movies.length]);

    const handleRightClick = () => {
        if (translate >= 75) {
            setTranslate(0);
            return;
        }
        setTranslate(translate + 25);
    };

    const handleLeftClick = () => {
        if (translate <= 0) {
            setTranslate(75);
            return;
        }
        setTranslate(translate - 25);
    };

    return (
        <StyledContainer>
            <div className='icon--buttons'>
                <button id='left' onClick={handleLeftClick}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button id='right' onClick={handleRightClick}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <ul className='movie--list--carousal' style={{ transform: `translateX(${-translate}%)` }}>
            {
                movies.map((movie, index)=>{
                    return <CarousalItem key={index} movie={movie}/>
                })
            }
            </ul>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    width: 100%;
    height: 35vmax;
    position: relative;
    margin-top: 50px;
    overflow: hidden;
    .icon--buttons {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
        button {
            background: transparent;
            display: inline-block;
            width: 40px;
            color: #aaaaaa;
            border: none;
            height: 40px;
            margin: 5px;
            font-size: 18px;
            transition: transform 0.1s ease;
            border-radius: 50%;
            &:hover {
                color: #ffffff;
                cursor: pointer;
                background-color: #cccccc68;
            }
        }
    }
    .movie--list--carousal {
        width: 400%;
        display: flex;
        overflow: hidden;
        transition: transform 1s ease-in-out;
        li {
            width: 100%;
            height: 35vmax;
            img {
                width: 100%;
                height: 100%; 
                object-fit: fill;
            }
            .content {
                position: absolute;
                color: #ffffff;
                height: 100%;
                top: 50%;
                background: linear-gradient(to right, black 10%, transparent 60%) no-repeat;
                display: flex;
                flex-direction: column;
                justify-content: center;
                transform: translateY(-50%);
                padding: 30px 40px;
                @media (max-width: 1030px) {
                    width: 25%;
                    padding: 7px 10px;
                }
                .title {
                    opacity: 0.8;
                    padding-left: 10px;
                    @media (min-width: 1030px) {
                        width: 50%;
                        font-size: 4rem;
                        
                    }
                }
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 10px;
                    p {
                        width: 50%;
                        font-size: 0.6rem;
                        opacity: 0.8;
                        margin-top: 20px;
                        @media (min-width: 1030px) {
                            font-size: 1.2rem;
                            width: 50%;
                        }
                    }
                    .buttons {
                        display: flex;
                        align-items: center;
                        margin-top: 50px;
                        @media (min-width: 1030px) {
                            margin-top: 70px;
                        }
                        button {
                            padding: 5px 20px;
                            font-size: 0.6rem;
                            background: transparent;
                            border: 2px solid red;
                            border-radius: 4px;
                            color: red;
                            cursor: pointer;
                            opacity: 0.8;
                            &:hover {
                                background-color: red;
                                color: white;
                                border: 2px solid black;
                            }
                            @media (min-width: 1030px) {
                                padding: 10px 40px;
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Carousal;
