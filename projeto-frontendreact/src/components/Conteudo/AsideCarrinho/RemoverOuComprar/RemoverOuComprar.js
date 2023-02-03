import React from "react";
import { ItensDoCarrinho, EspacoEntreItens } from "./style";

export default function RemoverOuComprar({
    item,
    removerDoCarrinho,
}) {
    return(
        <ItensDoCarrinho key={item.id}>
            {item.quantidade}
            <EspacoEntreItens />

            {item.name}

            <EspacoEntreItens />

            <button onClick={() => removerDoCarrinho(item.id)}>remover</button>
        </ItensDoCarrinho>
    )
}