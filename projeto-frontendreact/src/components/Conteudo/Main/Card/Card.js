import React from "react";
import { ItensDoCarrinho } from "../../AsideCarrinho/RemoverOuComprar/style";
import { BotaoDoCard, CardBox, EspacoEntreItens, ImageCard, NomeDoProduto } from "./style";

export default function Card({
    id,
    name,
    value,
    img,
    quantidade,

    itensNoCarrinho,
    eventItensNoCarrinho,
}) {
    return(
        <CardBox>
            <ImageCard src={img} />

            <EspacoEntreItens />
            <NomeDoProduto>{name}</NomeDoProduto>
            <NomeDoProduto>{value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</NomeDoProduto>
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