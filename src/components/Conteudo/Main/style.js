import styled from "styled-components";

export const PrimeiraMain = styled.main`
    width: 70%;
`

export const PrimeiroArticleMain = styled.article`
    display: flex;
    justify-content: space-between;
    margin: 10px;

    width: 90%;
`

export const SegundoArticleMain = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 80%;
    margin-top: 1%;
`

export const BotaoDoIconeCarrinho = styled.button`
    position: relative; 
    border: none;

    :hover{
        cursor: pointer;
    }

`

export const Quantidade = styled.span`
    position: absolute; 
    bottom: 0;

    width: 15px;
    border-radius: 100%;

    background: red;
`

export const ImagemDoCarrinho = styled.img`
    position: absolute; 
    bottom: 0;

    width: 30px;
`