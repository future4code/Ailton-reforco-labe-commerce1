import React from 'react'
import Header from './Header'
import CardMain from "../components/CardMain";
import styled from "styled-components";

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
        <Header/>
        <CardContainer>
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        <CardMain />
        </CardContainer>
    </MainContainer>

  )
}

export default Main