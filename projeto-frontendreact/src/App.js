import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header"
import Conteudo from "./components/Conteudo/Conteudo"
import Footer from "./components/Footer/Footer"

import appleIphone from "./img/appIephone13Pro.jpg"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
`

function App() {
  return (
    <ContainerGeral>
      <Header />
      <Conteudo img={appleIphone}/>
      <Footer />

      <GlobalStyle />
    </ContainerGeral>
  );
}

export default App;
