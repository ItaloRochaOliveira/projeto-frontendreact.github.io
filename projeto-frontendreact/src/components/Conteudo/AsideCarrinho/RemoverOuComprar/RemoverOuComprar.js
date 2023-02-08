import React from "react";
import { ItensDoCarrinho, EspacoEntreItens, NomeDoProduto, CardBox, ImageCard } from "./style";

export default function RemoverOuComprar({
    item,
    removerDoCarrinho,
}) {
    return(
        <CardBox key={item.id}>
            

            <ImageCard src={item.img}/>
            {item.quantidade}x
            <NomeDoProduto>{item.name}</NomeDoProduto>

            <button onClick={() => removerDoCarrinho(item)}>remover</button>
        </CardBox>
    )
}