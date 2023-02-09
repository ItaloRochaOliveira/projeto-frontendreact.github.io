import React, { useEffect, useState } from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import { ContainerCarrinho, CabecalhoFlex, ItensFlex} from "./style";

export default function Carrinho({
    setTrocarTela,

    itensNoCarrinho,
    setItensNoCarrinho,

    quantidade,
    setQuantidade,
}) {

    console.log(itensNoCarrinho)
    const [soma, setSoma] = useState(0)
    useEffect(()=> {
        //com for

        // let guardar = 0
        //     for(let item of itensNoCarrinho){
        //         guardar += item.value * item.quantidade
        //     }
        //     console.log(guardar)
        //     setSoma(guardar)

        //com reduce
        const valor = itensNoCarrinho.reduce((acumulador, item) =>  acumulador + item.value * item.quantidade, 0)
        console.log(valor)
        setSoma(valor)  
    }, [itensNoCarrinho])
    

    const removerDoCarrinho = (itens) => {
        setQuantidade(quantidade - 1)
        const verficacao = itensNoCarrinho.find((item)=>{
            return itens.id === item.id
        })
        if(verficacao.quantidade > 1){
            const novosItens = itensNoCarrinho.map((item) => {
                if(itens.id !== item.id){
                    return item
                } else {
                    return {...item, quantidade: item.quantidade - 1}
                }
            })
            setItensNoCarrinho(novosItens)
        } else {
            const novosItens = itensNoCarrinho.filter((item) => {
                if(itens.id !== item.id){
                    return item
                } 
            })
            
            setItensNoCarrinho(novosItens)
        }
    }

    const imprimirItensNoCarrinho = () => {
        return itensNoCarrinho.map((item) => {
            return <RemoverOuComprar key={item.id} item={item} removerDoCarrinho={removerDoCarrinho}/>
        })
    }

    return(
        <ContainerCarrinho>
            <button onClick={()=> setTrocarTela("home")}>/</button>
            <CabecalhoFlex>
                <h3>Carrinho:</h3>

                <p>{soma.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</p>
            </CabecalhoFlex>

            <ItensFlex>
                {imprimirItensNoCarrinho()}
            </ItensFlex>

            
        </ContainerCarrinho>
    )
}