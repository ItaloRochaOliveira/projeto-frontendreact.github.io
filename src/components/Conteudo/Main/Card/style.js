import styled from "styled-components";

export const CardBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 300px;
    min-width: 250px;
    width: 30%;
    margin: 10px;

    background: #0b1320;

    border: 1px solid black;
    border-radius: 30px;

    overflow: hidden;
`

export const ImageCard = styled.img`
    max-width: 50%;
    min-heigth: 50%;
    max-heigth: 60%;

    margin: 10px;
    border-radius: 20px;
    box-shadow: 10px 10px 190px blue;
`

export const EspacoEntreItens = styled.div`
    margin: 10px;
`

export const NomeDoProduto = styled.p`
    margin: 10px 0;
    text-align: center;
`

export const BotaoDoCard = styled.button`
    position: absolute;
    bottom: 0;

    height: 33px;
    margin: 10px;
    padding: 5px;
    border: 0.1px solid black;
    border-radius: 10px;

    background: #f3f6fa;

    :hover{
        cursor: pointer;
    }
`