import React from "react";
import { ContainerFiltro, EspacoEntreOsItens } from "./style";

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
            <h3>Filtros</h3>

            <EspacoEntreOsItens>
                <label>
                    valor mínimo:
                    <br />
                    <input value={valorMinimo} onChange={(e) => setValorMinimo(e.target.value)}/>
                </label> 
            </EspacoEntreOsItens>

            <br />

            <EspacoEntreOsItens>
                <label>
                    valor máximo:
                    <br />
                    <input value={valorMaximo} onChange={(e) => setValorMaximo(e.target.value)}/>
                </label>
            </EspacoEntreOsItens>

            <br />

            <EspacoEntreOsItens>
                <label>
                    buscar por nome:
                    <br />
                    <input value={buscarNome} onChange={(e)=> setBuscarNome(e.target.value)}/>
                </label>
            </EspacoEntreOsItens>
        </ContainerFiltro>
    )
}