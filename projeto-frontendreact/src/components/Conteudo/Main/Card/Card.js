import React from "react";
import { BotaoDoCard, CardBox, EspacoEntreItens, ImageCard } from "./style";

export default function Card({
    img,
}) {
    return(
        <CardBox>
            <ImageCard src={img} />

            <EspacoEntreItens />
            <p>Iphone 13 Pro Max</p>
            <EspacoEntreItens />
            <p>R$ 8.499,00</p>
            <EspacoEntreItens />

            <BotaoDoCard>Adicionar ao carrinho</BotaoDoCard>
            <EspacoEntreItens />
        </CardBox>
    )
}