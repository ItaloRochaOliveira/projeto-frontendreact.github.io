import React from "react";
import { BotaoDoCard, CardBox, EspacoEntreItens, ImageCard, NomeDoProduto } from "./style";

export default function Card({
    name,
    value,
    img,

    eventItensNoCarrinho,
}) {
    return(
        <CardBox>
            <ImageCard src={img} />

            <EspacoEntreItens />
            <NomeDoProduto>{name}</NomeDoProduto>
            <NomeDoProduto>R$ {value}</NomeDoProduto>
            <EspacoEntreItens />

            <BotaoDoCard onClick={() => {eventItensNoCarrinho({
                name: name,
                value: value,
            })}}>Adicionar ao carrinho</BotaoDoCard>
            <EspacoEntreItens />
        </CardBox>
    )
}