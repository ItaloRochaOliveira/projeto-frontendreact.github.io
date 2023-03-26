import styled from "styled-components";
import fundoEspacial from "../../img/fundo-espacial.png";

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

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
