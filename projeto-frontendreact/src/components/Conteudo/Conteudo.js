import React, { useEffect, useState} from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main"
import Carrinho from "./AsideCarrinho/Carrinho";
import { ConteudoDaPagina } from "./style";

export default function Conteudo({
    produtos,
    iconeCarrinho,
}) {
    

    const [trocarTela, setTrocarTela] = useState("home")

    const [itensNoCarrinho, setItensNoCarrinho] = useState([])
    const eventItensNoCarrinho = (novoItem) => {
        setQuantidade(quantidade + 1)

        const cardProduct = itensNoCarrinho.find((item) => {
            return item.id === novoItem.id
        })
        if(cardProduct){
            const novoCarrinho = itensNoCarrinho.map((item)=> {
                if(item.id === novoItem.id){
                    return {...item, quantidade: item.quantidade + 1}
                } else {
                    return item
                }
            })
            setItensNoCarrinho(novoCarrinho)
        } else {
            const item = {...novoItem, quantidade: 1}
            const novoCarrinho = [...itensNoCarrinho, item]
            setItensNoCarrinho(novoCarrinho)
        }         
    }

    const [ordenarItens, setOrdenarItens] = useState("")
    const [quantidade, setQuantidade] = useState(0)

    const [valorMinimo, setValorMinimo] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [buscarNome, setBuscarNome] = useState("")

    useEffect(() => {
        const carregarCarrinho = JSON.parse(localStorage.getItem("carrinho"))
        const carregarQuantidade = JSON.parse(localStorage.getItem("quantidade"))
        console.log(Number(carregarQuantidade))
        if(carregarCarrinho){
            setItensNoCarrinho(carregarCarrinho)
            setQuantidade(carregarQuantidade)
        }
    },[])
    useEffect(()=> {
        if(itensNoCarrinho.length > 0){
            localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho))
            localStorage.setItem("quantidade", JSON.stringify(quantidade))
        }
    }, [itensNoCarrinho])
    
    if(trocarTela === "home"){
        return(
            <ConteudoDaPagina>
                <AsideFiltro 
                buscarNome={buscarNome} setBuscarNome={setBuscarNome}
                valorMinimo={valorMinimo} setValorMinimo={setValorMinimo}
                valorMaximo={valorMaximo} setValorMaximo={setValorMaximo}
                />
                <Main 
                setTrocarTela={setTrocarTela}

                produtos={produtos} eventItensNoCarrinho={eventItensNoCarrinho}
                itensNoCarrinho={itensNoCarrinho}
                ordenarItens={ordenarItens} setOrdenarItens={setOrdenarItens}
                quantidade={quantidade}
    
                valorMinimo={valorMinimo}
                valorMaximo={valorMaximo}
                buscarNome={buscarNome}

                iconeCarrinho={iconeCarrinho}
                />
            </ConteudoDaPagina>
        )
    } else {
        return(
            <ConteudoDaPagina>
                <Carrinho 
                setTrocarTela={setTrocarTela}

                itensNoCarrinho={itensNoCarrinho} 
                setItensNoCarrinho={setItensNoCarrinho}
    
                quantidade={quantidade}
                setQuantidade={setQuantidade}
                />
            </ConteudoDaPagina>
        )
    }
}