import styled from "styled-components";

export const Cabecalho = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    background: #0b1312;
    color: white;
    
    font-family: space;

`

export const ListaHeader = styled.ul`
    display: flex;

    list-style: none;
`

export const EspacoEntreLi = styled.li`
    padding: 0 20px 0 20px;
    :hover{
        cursor: pointer;
        background: #afa8a8;
    }
`