import React from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import { ContainerCarrinho, CabecalhoFlex, ItensFlex} from "./style";

export default function AsideCarrinho({
    setTrocarTela,

    itensNoCarrinho,
    setItensNoCarrinho,

    quantidade,
    setQuantidade,
}) {

    const soma = () => {
        return itensNoCarrinho.reduce((acumulador, item) => {
        return acumulador + Number(item.value.replace(",", ".")), 0
    })}

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
            return <RemoverOuComprar item={item} removerDoCarrinho={removerDoCarrinho}/>
        })
    }

    return(
        <ContainerCarrinho>
            <button onClick={()=> setTrocarTela("home")}>/</button>
            <CabecalhoFlex>
                <h3>Carrinho:</h3>

                <p>R$ {soma()}</p>
            </CabecalhoFlex>

            <ItensFlex>
                {imprimirItensNoCarrinho()}
            </ItensFlex>

            
        </ContainerCarrinho>
    )
}