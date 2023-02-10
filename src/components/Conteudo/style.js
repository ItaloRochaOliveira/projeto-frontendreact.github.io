import styled from "styled-components";
import fundoEspacial from "../../img/fundo-espacial.png"

export const ConteudoDaPagina = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    max-width: 100vw;

    background: url(${fundoEspacial});
    color: white;
`