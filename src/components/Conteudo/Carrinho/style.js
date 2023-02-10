import styled from "styled-components";

export const ContainerCarrinho = styled.main`
    width: 100%;
    min-height: 80vh;
    padding: 20px;
    border: 1px solid black;
`
export const Voltar = styled.div`
    display: flex;
`

export const ImagemVoltar = styled.img`
    height: 40px;
`

export const BotaoVoltar = styled.button`
    border: none;
    font-size: 2rem;
    background: black;
    color: white;

    margin-bottom: 50px;

    :hover{
        cursor: pointer;
    }
`

export const TituloDoCarrinho = styled.h3`
    font-size: 2rem;
`

export const CabecalhoFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ItensFlex = styled.div`
    display: flex;  
    flex-wrap: wrap;
    justify-content: center;
`

export const Pagar = styled.div`
    display: flex;
`
export const Cards = styled.div`
    width: 80%
`

export const ContainerPagar = styled.div`
    height: 200px;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
`

export const Comprar = styled.div`
    height: 100px;
    min-width: 200px;

    background: #0b1320;
    opacity: 90%;
    backdrop-filter: opacity(10%);

    border-radius: 10px;

    text-align: center;
    font-size: 2rem;
`

export const BotaoComprar = styled.button`
    width: 200px;
    height: 60px;

    border-radius: 25px;

    background: linear-gradient(90deg, #101728, #1f41bb 80%);

    :hover{
        cursor: pointer;
    }
`