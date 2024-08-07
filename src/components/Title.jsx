import React from 'react'
import styled from 'styled-components'

const Title = ({text}) => {
  return (
    <StyledH2>
        {text}
    </StyledH2>
  )
}

const StyledH2 = styled.h2`
    font-weight: 400;
    text-decoration: underline;
    color: white;
    margin: 20px 20px;
    font-size: 1.4rem;
    @media (min-width: 500px){
      font-size: 2.2rem;
    }
`

export default Title