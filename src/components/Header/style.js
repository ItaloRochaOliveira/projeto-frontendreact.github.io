import styled from "styled-components";

export const Cabecalho = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    background: #0b1312;
    color: white;
    
    font-family: space;

    position: sticky;
    top: 0;
    z-index: 3;

    a{
        text-decoration: none;
        color: white;
    }

`