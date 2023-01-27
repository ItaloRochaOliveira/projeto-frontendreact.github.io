import React from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main"
import AsideCarrinho from "./AsideCarrinho/AsideCarrinho";
import { ConteudoDaPagina } from "./style";

export default function Conteudo({
    img,
}) {
    return(
        <ConteudoDaPagina>
            <AsideFiltro />
            <Main img={img}/>
            <AsideCarrinho />
        </ConteudoDaPagina>
    )
}