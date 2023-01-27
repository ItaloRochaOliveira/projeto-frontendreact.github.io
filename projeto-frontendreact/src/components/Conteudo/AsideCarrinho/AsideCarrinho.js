import React from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import { ContainerCarrinho} from "./style";

export default function AsideCarrinho() {
    return(
        <ContainerCarrinho>
            <h3>Carrinho:</h3>

            <RemoverOuComprar />

            <p>Valor total: R$0,00</p>
        </ContainerCarrinho>
    )
}