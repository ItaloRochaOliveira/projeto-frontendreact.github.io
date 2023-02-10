import React from "react";
import { ContainerFiltro, EspacoEntreOsItens, InputDoAside, LabelDoAside, LabelDoAsidePesquisa } from "./style";

export default function AsideFiltro({
    valorMinimo,
    setValorMinimo,

    valorMaximo,
    setValorMaximo,

    buscarNome,
    setBuscarNome,
}) {
    return(
        
        <ContainerFiltro>
            <EspacoEntreOsItens>
                <LabelDoAsidePesquisa>
                    0
                    <InputDoAside placeholder="Pesquisar produtos" value={buscarNome} onChange={(e)=> setBuscarNome(e.target.value)}/>
                    x
                </LabelDoAsidePesquisa>
            </EspacoEntreOsItens>
            
            <h3>Filtros</h3>

            <EspacoEntreOsItens>
                <label>
                    <InputDoAside placeholder="Preço minimo" value={valorMinimo} onChange={(e) => setValorMinimo(e.target.value)}/>
                </label> 
            </EspacoEntreOsItens>

            <EspacoEntreOsItens>
                <label>
                    <InputDoAside placeholder="Preço máximo" value={valorMaximo} onChange={(e) => setValorMaximo(e.target.value)}/>
                </label>
            </EspacoEntreOsItens>

        </ContainerFiltro>
    )
}