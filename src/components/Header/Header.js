import React, { useState } from "react";
import { Cabecalho, EspacoEntreLi, StyledBurger, UlHeader } from "./style";
import Main from "../Conteudo/Main/Main";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Cabecalho>
      <h1>Brinquedos espaciais</h1>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <nav>
        <UlHeader open={open}>
          <a href={"#home"}>
            <EspacoEntreLi>Home</EspacoEntreLi>
          </a>
          <a href="#about">
            <EspacoEntreLi>Sobre</EspacoEntreLi>
          </a>
          <a href="#footer">
            <EspacoEntreLi>Contato</EspacoEntreLi>
          </a>
        </UlHeader>
      </nav>
    </Cabecalho>
  );
}
