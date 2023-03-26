import styled from "styled-components";

export const ContainerGeral = styled.main`
  width: 100%;
  min-height: 80vh;
  padding: 20px;
  border: 1px solid black;
`;

export const MainConteudo = styled.main`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 30px;
  width: 100%;
  height: 100vh;
  margin-top: 10px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  } ;
`;

export const Voltar = styled.div`
  display: flex;
  justify-content: start;
  width: 10%;
`;

export const ImagemVoltar = styled.img`
  height: 40px;

  cursor: pointer;
`;

export const BotaoVoltar = styled.button`
  border: none;
  font-size: 2rem;
  background: black;
  color: white;

  margin-bottom: 50px;

  :hover {
    cursor: pointer;
  }
`;

export const Article = styled.article`
  display: flex;
  justify-content: center;

  width: 350px;
`;

export const Conteiner = styled.div`
  width: 400px;
  margin: 10px;
  overflow: hidden;

  position: relative;
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 0px;

  display: flex;
`;

export const Label = styled.label`
  width: 55px;
  height: 40px;
  margin: 4px;
  cursor: pointer;
`;

export const ImgLabel = styled.img`
  width: 50px;
  height: 40px;
  margin: 0 5px 0 5px;
  transition: 0.4s;

  :hover {
    filter: opacity(80%);
  }
`;

export const Input1 = styled.input`
  display: none;
  :checked ~ .s1 {
    margin-left: 0;
  }
`;
export const Input2 = styled.input`
  display: none;
  :checked ~ .s1 {
    margin-left: -20%;
  }
`;
export const Input3 = styled.input`
  display: none;
  :checked ~ .s1 {
    margin-left: -40%;
  }
`;
export const Input4 = styled.input`
  display: none;
  :checked ~ .s1 {
    margin-left: -60%;
  }
`;
export const Input5 = styled.input`
  display: none;
  :checked ~ .s1 {
    margin-left: -80%;
  }
`;

export const Slides = styled.div`
  display: flex;
  width: 500%;
  height: 300px;
`;

export const Slide = styled.div`
  width: 20%;
  transition: 0.6s;
`;

export const ImgConteudo = styled.img`
  width: 320px;
  height: 250px;
`;

export const Carrossel = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  width: 300px;
`;

export const SecondArticle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 300px;
  height: 320px;
  padding: 10px;

  background: #0b1320;
  opacity: 90%;
  backdrop-filter: opacity(10%);

  border-radius: 25px;
`;

export const Porcentagem = styled.span`
  background: #0b1350;

  padding: 5px;
  border-radius: 25px;
`;

export const BotaoCarrinho = styled.button`
  height: 33px;
  margin: 10px;
  padding: 5px;
  border: 0.1px solid black;
  border-radius: 10px;

  background: #f3f6fa;

  :hover {
    cursor: pointer;
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddStyle = styled.div`
  display: flex;
  justify-content: space-between;

  background: white;

  width: 60px;
  margin-left: 10px;
  border: 1px solid gray;
`;

export const AddButtons = styled.button`
  border: none;
  width: 15px;
`;

export const AddQuantidade = styled.p`
  color: black;
`;
