import React from "react";
import { BotaoDoCard, CardBox, EspacoEntreItens, ImageCard, NomeDoProduto } from "./style";

export default function Card({
    id,
    name,
    value,
    img,
    quantidade,

    eventItensNoCarrinho,
}) {
    return(
        <CardBox>
            <ImageCard src={img} alt={name}/>

            <EspacoEntreItens />
            <NomeDoProduto>{name}</NomeDoProduto>
            <NomeDoProduto><h3>{value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</h3></NomeDoProduto>
            <EspacoEntreItens />

            <BotaoDoCard onClick={() => {eventItensNoCarrinho({
                id: id,
                name: name,
                value: value,
                img: img,
                quantidade: quantidade,
            })}}>Adicionar ao carrinho</BotaoDoCard>
            <EspacoEntreItens />
        </CardBox>
    )
}