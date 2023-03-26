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

  border-radius: 25px;
`;

export const EspacoEntreOsItens = styled.div`
  padding-top: 10px;
`;

export const InputPesquisa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0b1350;
  border-radius: 10px;

  color: white;
  font-family: arial;
  min-width: 100%;
  height: 30px;
  padding: 10px;
`;
export const Lupa = styled.img`
  width: 20px;
  height: 20px;
`;

export const TituloFiltro = styled.h3`
  margin-top: 10px;
`;

export const InputDoAside = styled.input`
  min-width: 100%;
  min-height: 30px;
  text-align: center;
  margin: 10px 0;

  background: #0b1350;
  color: white;

  border: none;
  border-radius: 10px;

  :focus {
    outline: 0;
  }
`;

export const X = styled.span`
  cursor: pointer;
`;
