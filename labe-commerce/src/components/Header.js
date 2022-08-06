import styled from "styled-components";
import Space from "../assests/img/Space.png"
import { BiSearchAlt } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"

const HeaderContainer = styled.div`
  height: 55px;
  width: 100%;
  text-align: center;
  background-color: black;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
align-items: center;

  a {
    text-decoration: none;
    transition: all 1s;
  cursor: pointer;

  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  }

  img{
    height: 45px;
    padding-left: 30px;
  }

`;

const BuscarContainer = styled.div`
display: flex;
align-items: center;
margin-right: 30px;
gap: 5px;
input{
    border-radius: 5px;
    background-color: lightgrey;
    padding: 8px;
    border: none;
    width: 450px;
   

}
button{
margin-top: -3px;
    font-size: 30px;
    background: none;
    color: white;
    height: 30px;
width: 30px;
/* border: 1px solid white; */

    :active{
        font-size: 28px;
}
}
`
const Cart = styled.button`
margin-right: 30px;
font-size: 23px;
background: none;
color: white;
height: 40px;
width: 40px;
display: flex;
text-align: center;
padding: 7px;
border-radius: 5px;

:active{
    border: 1px solid white;
}
`
function Header() {
  return (
    <HeaderContainer>
      <a href="App.js">
        <img src={Space}/>
      
      </a>
      <BuscarContainer>
        <input placeholder="Buscar item" type="texte"></input>
        <button type="button">
        <BiSearchAlt />
        </button>
      </BuscarContainer>
      <Cart type="button">
        <FaShoppingCart />
        </Cart>
    </HeaderContainer>
  );
}

export default Header;
