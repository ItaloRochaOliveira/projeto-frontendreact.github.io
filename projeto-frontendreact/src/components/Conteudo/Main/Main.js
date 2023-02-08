import React from "react";
import Card from "./Card/Card"
import { PrimeiraMain, PrimeiroArticleMain, SegundoArticleMain } from "./style";

export default function Main({
    setTrocarTela,

    produtos,
    eventItensNoCarrinho,

    itensNoCarrinho,

    ordenarItens,
    setOrdenarItens,
    quantidade,

    valorMinimo,
    valorMaximo,
    buscarNome,
}) {
    

    const renderizarProdutos = () => {
        return produtos
            .filter((produto) => {
                if(produto.value > valorMinimo){
                    return produto
                } else if(!valorMinimo){
                    return produto
                }
            })
            .filter((produto) => {
                if(produto.value < valorMaximo){
                    return produto
                } else if(!valorMaximo){
                    return produto
                }
            })
            .filter((produto) => {
                if(buscarNome && produto.name.toLowerCase().includes(buscarNome.toLowerCase())){
                    return produto
                } else if(!buscarNome){
                    return produto
                }
            })
            .sort((a, b) => {
                const produtoAtual = a.name
                const produtoProximo = b.name

                if(ordenarItens === "Crescente"){
                    return produtoAtual > produtoProximo ? 1 : -1
                } else if (ordenarItens === "Decrescente"){
                    return produtoAtual < produtoProximo ? 1 : -1
                }
            })
            .map((produto) => {
            return <Card 
            id = {produto.id}
            name={produto.name} 
            value={produto.value.toFixed(2).replace(".", ",")} 
            img={produto.img}
            quantidade={produto.quantidade}
            
            itensNoCarrinho = {itensNoCarrinho}
            eventItensNoCarrinho={eventItensNoCarrinho}
            />
        })
    }
    const cardsTamanho = renderizarProdutos()
    return(
        <PrimeiraMain>
            <PrimeiroArticleMain>
                <div>
                    Quantidade de produtos: {cardsTamanho.length}
                </div>
                <div>
                    Ordenação: 

                    <select value={ordenarItens} onChange={(e) => {setOrdenarItens(e.target.value)}}>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </div>
                <div>
                    {quantidade}
                    <button onClick={() => setTrocarTela("carrinho")}>/</button>
                </div>
            </PrimeiroArticleMain>

            <SegundoArticleMain>
                {cardsTamanho}
            </SegundoArticleMain>
        </PrimeiraMain>
    )
}