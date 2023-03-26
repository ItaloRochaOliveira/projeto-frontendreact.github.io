import React, { useEffect, useState } from "react";
import AsideFiltro from "./AsideFiltro/AsideFiltro";
import Main from "./Main/Main";
import Carrinho from "./AsideCarrinho/Carrinho";
import { ConteudoDaPagina } from "./style";
import { Pagamento } from "./Pagamento/Pagamento";
import { Detalhes } from "./DetalhesDoProduto/Detalhes";

export default function Conteudo({ produtos, iconeCarrinho }) {
  const [trocarTela, setTrocarTela] = useState("home");

  const [itensNoCarrinho, setItensNoCarrinho] = useState([]);
  const eventItensNoCarrinho = (novoItem) => {
    setQuantidade(quantidade + novoItem.quantidade);

    const cardProduct = itensNoCarrinho.find((item) => {
      return item.id === novoItem.id;
    });
    if (cardProduct) {
      const novoCarrinho = itensNoCarrinho.map((item) => {
        if (item.id === novoItem.id) {
          return { ...item, quantidade: item.quantidade + novoItem.quantidade };
        } else {
          return item;
        }
      });
      setItensNoCarrinho(novoCarrinho);
    } else {
      const novoCarrinho = [...itensNoCarrinho, novoItem];
      setItensNoCarrinho(novoCarrinho);
    }
  };

  const [ordenarItens, setOrdenarItens] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [buscarNome, setBuscarNome] = useState("");

  const [produtoDetalhe, setProdutoDetalhe] = useState({});

  useEffect(() => {
    const carregarCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    const carregarQuantidade = JSON.parse(localStorage.getItem("quantidade"));
    if (carregarCarrinho) {
      setItensNoCarrinho(carregarCarrinho);
      setQuantidade(carregarQuantidade);
    }
  }, []);
  useEffect(() => {
    if (itensNoCarrinho.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho));
      localStorage.setItem("quantidade", JSON.stringify(quantidade));
    }
  }, [itensNoCarrinho]);

  if (trocarTela === "home") {
    return (
      <ConteudoDaPagina>
        <AsideFiltro
          buscarNome={buscarNome}
          setBuscarNome={setBuscarNome}
          valorMinimo={valorMinimo}
          setValorMinimo={setValorMinimo}
          valorMaximo={valorMaximo}
          setValorMaximo={setValorMaximo}
        />
        <Main
          setTrocarTela={setTrocarTela}
          produtos={produtos}
          eventItensNoCarrinho={eventItensNoCarrinho}
          itensNoCarrinho={itensNoCarrinho}
          ordenarItens={ordenarItens}
          setOrdenarItens={setOrdenarItens}
          quantidade={quantidade}
          valorMinimo={valorMinimo}
          valorMaximo={valorMaximo}
          buscarNome={buscarNome}
          setProdutoDetalhe={setProdutoDetalhe}
          iconeCarrinho={iconeCarrinho}
        />
      </ConteudoDaPagina>
    );
  } else if (
    trocarTela === "carrinho" ||
    trocarTela === "carrinho-1" ||
    trocarTela === "carrinho-2"
  ) {
    return (
      <ConteudoDaPagina>
        <Carrinho
          trocarTela={trocarTela}
          setTrocarTela={setTrocarTela}
          itensNoCarrinho={itensNoCarrinho}
          setItensNoCarrinho={setItensNoCarrinho}
          quantidade={quantidade}
          setQuantidade={setQuantidade}
        />
      </ConteudoDaPagina>
    );
  } else if (trocarTela === "comprar") {
    return (
      <ConteudoDaPagina>
        <Pagamento setTrocarTela={setTrocarTela} />
      </ConteudoDaPagina>
    );
  } else if (trocarTela === "detalhes") {
    return (
      <ConteudoDaPagina>
        <Detalhes
          produto={produtoDetalhe}
          eventItensNoCarrinho={eventItensNoCarrinho}
          setTrocarTela={setTrocarTela}
          setQuantidade={setQuantidade}
        />
      </ConteudoDaPagina>
    );
  }
}
