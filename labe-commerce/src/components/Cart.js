import React from "react";
import styled from "styled-components";
import Comprar from '../assests/img/comprar.png'
import Balao from '../assests/img/RoboBalao.png'
import Cancelamento from '../assests/img/cancelamento.png'

const CarrinhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  p {
    text-align: left;
    padding: 0 8px;
  }
  h4 {
    text-align: left;
    
  }
  div {
    display: flex;
  }
  
`;
const Valor = styled.p`
  width: 15%;
 
`;

const BotaoCancelar = styled.button`
  margin: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 25px;
  }
`;

const BotaoComprar = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    width: 100px;
  }
  &:hover {
    opacity: 0.5;
  }
`;


function Cart (){


    confirmacaoDeCompra = () => {
        alert(`Pedido enviado!`);
      };
    
      valorTotal = () => {
        let totalValor = 0;
    
        for (let produto of this.props.produtosNoCarrinho) {
          totalValor += produto.value * produto.quantidade;
        }
    
        return totalValor;
      };

      return (
        <div>
             <CarrinhoContainer>
              <h3>Carrinho</h3>
          <h4>Produtos:</h4>
          {this.props.produtosNoCarrinho.map((item, index) => {
            return (
                <div key={index}>
                  <p>{item.quantidade}x</p>
                  <p>{item.name}</p>
                  <Valor>R$ {item.value},00</Valor>
                  <BotaoCancelar
                  onClick={() => this.props.removeProdutoCarrinho(item.id)}
                >
                  <img src={Cancelamento} alt="Cancelar Compra" />
                </BotaoCancelar>
              </div>
            );
          })}

          <h4>Valor total: R$ {this.props.valorTotal()},00</h4>
          <BotaoComprar onClick={() => this.props.confirmacaoDeCompra()}>
            <img src={Comprar} alt="Compra" />
          </BotaoComprar>
          <img src={Balao} alt="Cancelar Compra" />
             
             </CarrinhoContainer>
             
               </div>
);



}


export default Cart