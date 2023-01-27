import styled from "styled-components";

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 300px;
    min-width: 200px;
    width: 30%;
    margin: 10px;

    border: 1px solid black;
    border-radius: 30px;

    overflow: hidden;
`

export const ImageCard = styled.img`
    max-width: 100%;
    max-heigth: 60%;
`

export const EspacoEntreItens = styled.div`
    margin: 10px;
`

export const BotaoDoCard = styled.button`
    padding: 5px;
    border: 0.1px solid black;
    border-radius: 25px;

    :hover{
        cursor: pointer;
    }
`