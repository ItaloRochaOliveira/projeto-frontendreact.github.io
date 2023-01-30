import React from "react";
import Card from "./Card/Card"
import { PrimeiraMain, PrimeiroArticleMain, SegundoArticleMain } from "./style";

export default function Main({
    produtos,
    eventItensNoCarrinho,
}) {
    const renderizarBonecos = () => {
        return produtos.map((produto) => {
            return <Card 
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

                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>
                </div>
            </PrimeiroArticleMain>

            <SegundoArticleMain>
                {renderizarBonecos()}
            </SegundoArticleMain>
        </PrimeiraMain>
    )
}