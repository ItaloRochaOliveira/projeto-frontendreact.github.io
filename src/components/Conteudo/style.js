import styled from "styled-components";
import fundoEspacial from "../../img/fundo-espacial.png"

export const ConteudoDaPagina = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    max-width: 100vw;
    min-height: 70vh;

    background: url(${fundoEspacial});
    color: white;

    font-family: space;
    font-size: 1rem;
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
export const AindaNaoDisponivel = styled.h3`
    font-size: 4rem;
`
