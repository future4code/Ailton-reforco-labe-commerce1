import React from 'react'
import CardMain from "../components/CardMain";
import styled from "styled-components";
import Cart from './Cart';


const MainContainer = styled.div`
background-color: lightgrey;

`

const CardContainer = styled.div`
background-color: lightgrey;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

padding: 1rem;
`
function Main( ) {
  return (
    <MainContainer>
       
        <CardContainer>
        <CardMain />
       
         </CardContainer>
       
    </MainContainer>

  )
}

export default Main