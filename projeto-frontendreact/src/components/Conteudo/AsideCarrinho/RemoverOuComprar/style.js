import styled from "styled-components";

export const ItensDoCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    min-width: 100%;
    margin: 10px;
`
export const CardBox = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 300px;
    min-width: 200px;
    width: 20%;
    margin: 10px;

    border: 1px solid black;
    border-radius: 30px;

    overflow: hidden;
`

export const ImageCard = styled.img`
    max-width: 100%;
    min-heigth: 50%;
    max-heigth: 60%;
`

export const EspacoEntreItens = styled.div`
    margin: 10px;
`

export const NomeDoProduto = styled.p`
    margin: 10px 0;
    text-align: center;
`