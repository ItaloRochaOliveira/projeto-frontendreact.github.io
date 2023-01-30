import React from "react";
import { ItensDoCarrinho, EspacoEntreItens } from "./style";

export default function RemoverOuComprar({
    ItensCarrinho,
}) {

    console.log(ItensCarrinho)
    return(
        <ItensDoCarrinho>
            1x
            <EspacoEntreItens />

            produto n

            <EspacoEntreItens />

            <button>remover</button>
        </ItensDoCarrinho>
    )
}