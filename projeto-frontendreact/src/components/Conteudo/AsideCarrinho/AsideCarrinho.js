import React from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import { ContainerCarrinho} from "./style";

export default function AsideCarrinho({
    itensNoCarrinho,
}) {
    let soma = 0
    const renderizarItensNoCarrinho = () => {
        return itensNoCarrinho.map((item) => {
            soma += Number(item.value.replace(",", "."))
            return <RemoverOuComprar item={item}/>
    })}
    return(
        <ContainerCarrinho>
            <h3>Carrinho:</h3>

            {renderizarItensNoCarrinho()}

            <p>R$ {soma.toFixed(2).replace(".", ",")}</p>
        </ContainerCarrinho>
    )
}