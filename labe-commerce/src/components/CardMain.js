import React from 'react'
import styled from "styled-components";
import blusa1 from '../assests/img/blusa1.png'
import blusa2 from '../assests/img/blusa2.jpeg'
import blusa3 from '../assests/img/blusa3.jpeg'
import blusa4 from '../assests/img/blusa4.jpeg'
import blusa5 from '../assests/img/blusa5.jpeg'
import blusa6 from '../assests/img/blusa6.jpg'
import blusa7 from '../assests/img/blusa7.jpeg'
import blusa8 from '../assests/img/blusa8.jpeg'
import blusa9 from '../assests/img/blusa9.jpeg'
import blusa10 from '../assests/img/blusa10.jpg'
import blusa11 from '../assests/img/blusa11.jpeg'
import blusa12 from '../assests/img/blusa12.jpg'

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
border-radius: 10px;
border: 2px solid purple;
img{

    max-width: 200px;
}
`

function CardMain() {
  state = {
    produtos: [
      {
        id: 1,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa1,
      },

      {
        id: 2,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa2,
      },
      {
        id: 3,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa3,
      },
      {
        id: 4,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa4
      },
      {
        id: 5,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa5,
      },
      {
        id: 6,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa6,
      },
      {
        id: 7,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa7,
      },

      {
        id: 8,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa8,
      },
      {
        id: 9,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa9,
      },
      {
        id: 10,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa10
      },
      {
        id: 11,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa11,
      },
      {
        id: 12,
        name: "Traje 5000x",
        value: 350.0,
        imageUrl: blusa12,
      },

    ],

    valorTotal: 0,
    
  }
  return (
    <CardContainer>
      <div>
          <div>
          <img src={props.produto.imageUrl} alt={props.produto.name} />
          <p>{props.produto.name}</p>
          <p>R$ {props.produto.value},00</p>
          <button onClick={() => props.this.adicionarCarrinho(produto)}>
          </button>
        </div>
      </div>
      

    </CardContainer>
  )
}

export default CardMain