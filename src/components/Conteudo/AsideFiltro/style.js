import styled from "styled-components";

export const ContainerFiltro = styled.aside`
    display: flex;
    flex-direction: column;

    background: #0b1320;
    opacity: 90%;
    backdrop-filter: opacity(10%);

    max-height: 300px;
    min-width: 20%;
    margin: 1%;
    padding: 30px;

    border: 1px solid #0b1320;
    border-radius: 25px;
`

export const EspacoEntreOsItens = styled.div`
    padding-top: 10px;
`

export const LabelDoAsidePesquisa = styled.label`
    display: flex;
    align-items: center;
    background: white;
    color: black;
    width: 100%;
    
`

export const InputDoAside = styled.input`
    min-width: 100%;
    min-height: 30px;
    text-align: center;
    
    border-radius: 10px;
    border:none;
`