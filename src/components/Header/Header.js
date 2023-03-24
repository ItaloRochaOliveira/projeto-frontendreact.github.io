import React from "react";
import {Cabecalho} from "./style"
import Burger from "./styled-hamburguer/Nav";


export default function Header() {
    return(
        <Cabecalho>
            <h1>Brinquedos espaciais</h1>
            <Burger />
        </Cabecalho>
    )
}