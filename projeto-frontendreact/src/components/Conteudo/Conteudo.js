import React, { useState } from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main"
import AsideCarrinho from "./AsideCarrinho/AsideCarrinho";
import { ConteudoDaPagina } from "./style";

export default function Conteudo({
    produtos,
}) {

    const [itensNoCarrinho, setItensNoCarrinho] = useState([])
    const eventItensNoCarrinho = (itens) => {
        console.log(itensNoCarrinho.map((item) => console.log(item.quantidade)))
        itensNoCarrinho.find((item)=>{
            console.log(item.quantidade)
            if( itens.id !== item.id) {
                const novoCarrinho = [...item, itens]
                return setItensNoCarrinho(novoCarrinho)
            } else if(item.id === itens.id){
                return item.quantidade += 1
            }
        })   
        const novoCarrinho = [...itensNoCarrinho, itens]
        setItensNoCarrinho(novoCarrinho)
    }

    const [ordenarItens, setOrdenarItens] = useState("")

    const [valorMinimo, setValorMinimo] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [buscarNome, setBuscarNome] = useState("")
    
    return(
        <ConteudoDaPagina>
            <AsideFiltro 
            buscarNome={buscarNome} setBuscarNome={setBuscarNome}
            valorMinimo={valorMinimo} setValorMinimo={setValorMinimo}
            valorMaximo={valorMaximo} setValorMaximo={setValorMaximo}
            />
            <Main 
            produtos={produtos} eventItensNoCarrinho={eventItensNoCarrinho}
            itensNoCarrinho={itensNoCarrinho}
            ordenarItens={ordenarItens} setOrdenarItens={setOrdenarItens}

            valorMinimo={valorMinimo}
            valorMaximo={valorMaximo}
            buscarNome={buscarNome}
            />
            <AsideCarrinho itensNoCarrinho={itensNoCarrinho} setItensNoCarrinho={setItensNoCarrinho}/>
        </ConteudoDaPagina>
    )
}