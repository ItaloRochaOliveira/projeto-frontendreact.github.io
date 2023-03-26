import React from "react";
import {
  BotaoDoCard,
  CardBox,
  EspacoEntreItens,
  ImageCard,
  NomeDoProduto,
} from "./style";

export default function Card({
  produtos,
  id,
  name,
  value,
  img,

  setTrocarTela,

  setProdutoDetalhe,
}) {
  const detalhesProduto = () => {
    const produtoEncontrado = produtos.find((produto) => produto.id === id);
    setProdutoDetalhe(produtoEncontrado);

    setTrocarTela("detalhes");
  };
  return (
    <CardBox>
      <ImageCard src={img} alt={name} />

      <EspacoEntreItens />
      <NomeDoProduto>{name}</NomeDoProduto>
      <NomeDoProduto>
        <h3>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
      </NomeDoProduto>
      <EspacoEntreItens />

      <BotaoDoCard onClick={() => detalhesProduto()}>
        Ver detalhes do produto
      </BotaoDoCard>
      <EspacoEntreItens />
    </CardBox>
  );
}
