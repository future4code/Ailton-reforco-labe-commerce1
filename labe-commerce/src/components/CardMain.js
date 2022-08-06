import React from 'react'
import styled from "styled-components";

const CardContainer = styled.div`
background-color: white;
padding: 10px;
margin: 5px;
width: 200px;
height: 250px;
text-align: center;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
gap: 5px;
img{

    max-width: 200px;
}
`

function CardMain( ) {
  return (
    <CardContainer>
        <img src='https://azeheb.com.br/blog/wp-content/uploads/2016/05/f%C3%ADsica-dos-foguetes.jpg'/>
        <h2>Foguete da Missão Apollo 11</h2>
        <p><b>Valor:</b> 300999$</p>
    </CardContainer>
  )
}

export default CardMain