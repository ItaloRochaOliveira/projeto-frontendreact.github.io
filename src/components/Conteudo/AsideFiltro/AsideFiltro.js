import React from "react";
import { ContainerFiltro, EspacoEntreOsItens, InputDoAside, InputPesquisa, Lupa, TituloFiltro } from "./style";
import lupa from "../../../img/lupa.png"

export default function AsideFiltro({
    valorMinimo,
    setValorMinimo,
    
    valorMaximo,
    setValorMaximo,

    buscarNome,
    setBuscarNome
}) {
    return(
        
        <ContainerFiltro>
            <EspacoEntreOsItens>
                <InputPesquisa>
                    <Lupa src={lupa} />
                    <label>
                        
                        <InputDoAside placeholder="Pesquisar produtos" value={buscarNome} onChange={(e)=> setBuscarNome(e.target.value)}/>
                        
                    </label>
                    x
                </InputPesquisa>
            </EspacoEntreOsItens>
            
            <TituloFiltro>Filtros</TituloFiltro>

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