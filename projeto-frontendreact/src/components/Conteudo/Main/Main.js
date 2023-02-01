import React from "react";
import Card from "./Card/Card"
import { PrimeiraMain, PrimeiroArticleMain, SegundoArticleMain } from "./style";

export default function Main({
    produtos,
    eventItensNoCarrinho,

    ordenarItens,
    setOrdenarItens,

    buscarNome,
}) {
    const renderizarProdutos = () => {
        return produtos
            .filter((produto) => {
                if(buscarNome && produto.name.toLowerCase().includes(buscarNome.toLowerCase())){
                    return produto
                } else if(!buscarNome){
                    return produto
                }
            })
            .sort((a, b) => {
                const produtoAtual = a.name
                const produtoTrocar = b.name

                if(ordenarItens === "Crescente"){
                    return produtoAtual > produtoTrocar ? 1 : -1
                } else if (ordenarItens === "Decrescente"){
                    return produtoAtual < produtoTrocar ? 1 : -1
                }
            })
            .map((produto) => {
            return <Card 
            id = {produto.id}
            name={produto.name} 
            value={produto.value.toFixed(2).replace(".", ",")} 
            img={produto.img}
            
            eventItensNoCarrinho={eventItensNoCarrinho}
            />
        })
    }
    return(
        <PrimeiraMain>
            <PrimeiroArticleMain>
                <div>
                    Quantidade de produtos: 0
                </div>
                <div>
                    Ordenação: 

                    <select value={ordenarItens} onChange={(e) => {setOrdenarItens(e.target.value)}}>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </div>
            </PrimeiroArticleMain>

            <SegundoArticleMain>
                {renderizarProdutos()}
            </SegundoArticleMain>
        </PrimeiraMain>
    )
}