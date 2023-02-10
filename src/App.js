import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header"
import Conteudo from "./components/Conteudo/Conteudo"
import Footer from "./components/Footer/Footer"

import naveAcustica from "./img/nave-acustica.jpg"
import kitSistemaSolar from "./img/kit-sistema-solar.jpg"
import onibusEspacial from "./img/onibus-espacial.jpg"
import espacoComMatematica from "./img/espaco-com-matematica.jpg"
import coelhoEspacial from "./img/coelho-espacial.jpg"
import brinquedoAstronauta from "./img/brinquedo-astronauta.jpg"

import iconeCarrinho from "./img/icone-carrinho.png"


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
//comentadno
const produtos = [
  {
    id: 0,
    name: "Nave acustica",
    value: 70.10,
    img: naveAcustica,
    quantidade: 0,
  },
  {
    id: 1,
    name: "Kit Sistema Solar",
    value: 89.99,
    img: kitSistemaSolar,
    quantidade: 0,
  },
  {
    id: 2,
    name: "Onibus espacial",
    value: 207,
    img: onibusEspacial,
    quantidade: 0,
  },
  {
    id: 3,
    name: "Briquedo de matematica com tematica astronauta",
    value: 267,
    img: espacoComMatematica,
    quantidade: 0,
  },
  {
    id: 4,
    name: "6 peças de coelhos astronautas",
    value: 65,
    img: coelhoEspacial,
    quantidade: 0,
  },
  {
    id: 5,
    name: "Boneco astronauta com ornamento externo",
    value: 83,
    img: brinquedoAstronauta,
    quantidade: 0,
  }
]

function App() {
  return (
    <ContainerGeral>
      <Header />
      <Conteudo produtos={produtos} iconeCarrinho={iconeCarrinho}/>
      <Footer />

      <GlobalStyle />
    </ContainerGeral>
  );
}

export default App;
