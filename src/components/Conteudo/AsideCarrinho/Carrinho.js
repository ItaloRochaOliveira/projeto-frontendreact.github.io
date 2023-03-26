import React, { useEffect, useState } from "react";
import RemoverOuComprar from "./RemoverOuComprar/RemoverOuComprar";
import {
  ContainerCarrinho,
  Voltar,
  ImagemVoltar,
  BotaoVoltar,
  TituloDoCarrinho,
  CabecalhoFlex,
  ItensFlex,
  Pagar,
  Cards,
  ContainerPagar,
  Comprar,
  BotaoComprar,
} from "./style";
import botaoVoltar from "../../../img/botao-voltar.png";

export default function Carrinho({
  trocarTela,
  setTrocarTela,

  itensNoCarrinho,
  setItensNoCarrinho,

  quantidade,
  setQuantidade,
}) {
  const [soma, setSoma] = useState(0);
  useEffect(() => {
    //com for

    // let guardar = 0
    // for(let item of itensNoCarrinho){
    //     guardar += item.value * item.quantidade
    // }
    // console.log(guardar)
    // setSoma(guardar)

    //com reduce
    const valor = itensNoCarrinho.reduce(
      (acumulador, item) => acumulador + item.value * item.quantidade,
      0
    );
    setSoma(valor);
  }, [itensNoCarrinho]);

  const removerDoCarrinho = (itens) => {
    setQuantidade(quantidade - 1);

    const verficacao = itensNoCarrinho.find((item) => {
      return itens.id === item.id;
    });
    if (verficacao.quantidade > 1) {
      const novosItens = itensNoCarrinho.map((item) => {
        if (itens.id !== item.id) {
          return item;
        } else {
          return { ...item, quantidade: item.quantidade - 1 };
        }
      });
      setItensNoCarrinho(novosItens);
    } else {
      const novosItens = itensNoCarrinho.filter((item) => {
        if (itens.id !== item.id) {
          return item;
        }
      });

      setItensNoCarrinho(novosItens);
    }
  };

  const imprimirItensNoCarrinho = () => {
    return itensNoCarrinho.map((item) => {
      return (
        <RemoverOuComprar
          key={item.id}
          item={item}
          removerDoCarrinho={removerDoCarrinho}
        />
      );
    });
  };

  return (
    <ContainerCarrinho>
      <Voltar
        onClick={() =>
          trocarTela === "carrinho-1"
            ? setTrocarTela("home")
            : setTrocarTela("detalhes")
        }
      >
        <ImagemVoltar src={botaoVoltar} />

        <BotaoVoltar>voltar</BotaoVoltar>
      </Voltar>

      <CabecalhoFlex>
        <TituloDoCarrinho>Carrinho:</TituloDoCarrinho>
      </CabecalhoFlex>

      <Pagar>
        <Cards>
          <ItensFlex>{imprimirItensNoCarrinho()}</ItensFlex>
        </Cards>

        <ContainerPagar>
          <Comprar>
            Total:
            <p>
              {soma.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </Comprar>

          <BotaoComprar onClick={() => setTrocarTela("comprar")}>
            Comprar
          </BotaoComprar>
        </ContainerPagar>
      </Pagar>
    </ContainerCarrinho>
  );
}
