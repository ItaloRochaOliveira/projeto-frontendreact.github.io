import React from "react";
import { ItensDoCarrinho, EspacoEntreItens, NomeDoProduto, CardBox, ImageCard, BotaoDoCard } from "./style";

export default function RemoverOuComprar({
    item,
    removerDoCarrinho,
}) {
    return(
        <CardBox key={item.id}>
            

            <ImageCard src={item.img}/>
            {item.quantidade}x
            <NomeDoProduto>{item.name}</NomeDoProduto>
            {item.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
            })}

            <BotaoDoCard onClick={() => removerDoCarrinho(item)}>remover</BotaoDoCard>
        </CardBox>
    )
}