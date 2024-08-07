import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>
        <p>
            <span>This is a practice project.</span>
            <span>Made for fun.</span>
            <span>© copyright, 2024 ~Karan</span>
        </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    width: 100%;
    background: #dddddd;
    height: 100px;
    position: relative;
    border-top-left-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 500px){
        height: 150px;
    }
    p{
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 10px;
        margin-right: 10px;
        span{
            &:last-child{
                font-size: 10px;
            }
        }
    }
`
export default Footer