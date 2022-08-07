import React from 'react'



function CardCart (){

    state = {
        addCarrinho: [],
    }

adiconarCarrinho =(produto) => {
let idProduto= produto.id
const produtoNoCarrinho = this.state.addCarrinho?.find(
    (item) => idProduto === item.id
)
if(produtoNoCarrinho){
    const novoProduto =  this.state.addCarrinho.map((produtoAdd)=> {
        if(idProduto === produtoAdd.id){
            return {
                ...produtoAdd,
                quantidade: produtoAdd.quantidade + 1,
            }
        }
        return produtoAdd
         })
this.setState({addCarrinho: novoProduto})
} else{
    const novoProduto = {
        ...produto,
        quantidade: 1,
    }
    const novoProdutocarrinho= [...this.state.addCarrinho, novoProduto]
    this.setState({addCarrinho: novoProdutocarrinho})
}
}

removerProdutoCarrinho = (produtoId) => {
const removerDoCarrinho = this.state.addCarrinho.map((produto)=> {
    if(produto.id === produtoId ){
return{
    ...produto.quantidade - 1
}
}
return produto
})
.filter((produto) => produto.quantidade > 0)
this.setState({addCarrinho: removerDoCarrinho})




}
return(
    <Carrinho
    produtosNoCarrinho={props.this.state.addCarrinho}
    removeProdutoCarrinho={props.this.removeProdutoCarrinho}
    
    />
)


}


export default CardCart