import React from "react";
import botaoVoltar from "../../../img/botao-voltar.png";
import { AindaNaoDisponivel, BotaoVoltar, ImagemVoltar, Voltar } from "./index";

export function Pagamento({ setTrocarTela }) {
  return (
    <div>
      <Voltar onClick={() => setTrocarTela("carrinho-1")}>
        <ImagemVoltar src={botaoVoltar} />

        <BotaoVoltar>voltar</BotaoVoltar>
      </Voltar>
      <div>
        <AindaNaoDisponivel>
          Parte do pagamento ainda não disponivel
        </AindaNaoDisponivel>
        Deseja voltar? <br />
        <Voltar onClick={() => setTrocarTela("carrinho-1")}>
          <ImagemVoltar src={botaoVoltar} />

          <BotaoVoltar>voltar</BotaoVoltar>
        </Voltar>
      </div>
    </div>
  );
}
