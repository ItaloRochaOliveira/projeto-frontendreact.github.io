import React, { useState } from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main"
import AsideCarrinho from "./AsideCarrinho/AsideCarrinho";
import { ConteudoDaPagina } from "./style";

export default function Conteudo({
    produtos,
}) {

    const [itensNoCarrinho, setItensNoCarrinho] = useState({
        name: "",
        value: "",
    })
    const eventItensNoCarrinho = (itens) => {
        setItensNoCarrinho(itens)
    }
    return(
        <ConteudoDaPagina>
            <AsideFiltro />
            <Main produtos={produtos} eventItensNoCarrinho={eventItensNoCarrinho}/>
            <AsideCarrinho itensNoCarrinho={itensNoCarrinho}/>
        </ConteudoDaPagina>
    )
}