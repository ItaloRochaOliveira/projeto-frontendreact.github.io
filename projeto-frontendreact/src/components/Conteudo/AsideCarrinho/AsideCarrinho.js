import React from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import { ContainerCarrinho} from "./style";

export default function AsideCarrinho({
    itensNoCarrinho,
    setItensNoCarrinho,
}) {
    let soma = 0

    const removerDoCarrinho = (valor) => {
        const listaFiltrada = itensNoCarrinho.filter((item) => {
            return valor !== item.id ? item.quantidade-1 : item.quantidade
        })
        setItensNoCarrinho(listaFiltrada)
    }

    return(
        <ContainerCarrinho>
            <h3>Carrinho:</h3>

            {itensNoCarrinho.map((item) => {
                soma += Number(item.value.replace(",", "."))
                return <RemoverOuComprar item={item} removerDoCarrinho={removerDoCarrinho}/>
            })}

            <p>R$ {soma.toFixed(2).replace(".", ",")}</p>
        </ContainerCarrinho>
    )
}