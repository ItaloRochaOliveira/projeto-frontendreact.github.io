import styled from "styled-components";

export const Rodape = styled.footer`
    background: #0b1312;
    color: white
`

export const InfoPessoal = styled.main`
    display: flex;
    justify-content: space-between;

    height: 20%;
    margin-left: 10%;

    @media (max-width: 600px){
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin: 4%;
        padding: 4%;
    }
`

export const ArticlesInfoPessoal = styled.article `
    width: 20%;
    margin: 1%;

    @media (max-width: 600px){
        width: 70%;
    }
`

export const LinkSemDecoracao = styled.a`
    text-decoration: none;  
    color: white;
`

export const CentralizarTexto = styled.main `
    text-align: center;
`