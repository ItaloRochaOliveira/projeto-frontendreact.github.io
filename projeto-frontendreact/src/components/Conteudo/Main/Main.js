import React from "react";
import Card from "./Card/Card"
import { BotaoDoIconeCarrinho, ImagemDoCarrinho, PrimeiraMain, PrimeiroArticleMain, Quantidade, SegundoArticleMain } from "./style";

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

    iconeCarrinho,
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
                } else {
                    return a.value - b.value
                }
            })
            .map((produto) => {
            return <Card 
            id = {produto.id}
            name={produto.name} 
            value={produto.value} 
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
                    <option>Ordenar</option>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </div>
                <div>
                    
                    <BotaoDoIconeCarrinho onClick={() => setTrocarTela("carrinho")}>
                        <ImagemDoCarrinho src={iconeCarrinho}/>
                        <Quantidade>{quantidade}</Quantidade>
                    </BotaoDoIconeCarrinho>
                </div>
            </PrimeiroArticleMain>

            <SegundoArticleMain>
                {cardsTamanho}
            </SegundoArticleMain>
        </PrimeiraMain>
    )
}