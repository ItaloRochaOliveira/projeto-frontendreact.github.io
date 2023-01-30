import React from "react";
import { ItensDoCarrinho, EspacoEntreItens } from "./style";

export default function RemoverOuComprar({
    item,
}) {

    console.log(item)
    return(
        <ItensDoCarrinho>
            1x
            <EspacoEntreItens />

            {item.name}

            <EspacoEntreItens />

            <button>remover</button>
        </ItensDoCarrinho>
    )
}