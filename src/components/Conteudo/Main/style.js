import styled from "styled-components";

export const PrimeiraMain = styled.main`
    width: 70%;
    min-height: 70vh;
`

export const PrimeiroArticleMain = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 10px;

    width: 90%;
`

export const EstiloDoSelect = styled.select`
    margin-left: 10px;
    height: 25px;

    border: none;
    border-radius: 10px;

    background: #0b1320;
    color: white;
`

export const SegundoArticleMain = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: end;

    width: 90%;
    margin-top: 1%;
`

export const BotaoDoIconeCarrinho = styled.button`
    position: relative; 
    border: none;
    margin-top: 35px;

    :hover{
        cursor: pointer;
    }

`

export const Quantidade = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute; 
    bottom: 0;
    right: 0;

    width: 20px;
    height: 20px;
    border-radius: 100%;

    background: blue;
`

export const ImagemDoCarrinho = styled.img`
    position: absolute; 
    bottom: 0;
    right: 0;

    width: 40px;
`