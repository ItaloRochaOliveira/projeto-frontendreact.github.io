import React, { useState } from "react";
import {
  Conteiner,
  Voltar,
  ImagemVoltar,
  BotaoVoltar,
  Navigation,
  Label,
  Slides,
  Slide,
  Article,
  ImgConteudo,
  MainConteudo,
  ImgLabel,
  Input1,
  Input2,
  Input3,
  Input4,
  Input5,
  SecondArticle,
  BotaoCarrinho,
  Porcentagem,
  Add,
  AddContainer,
  AddStyle,
  AddButtons,
  AddQuantidade,
  ContainerGeral,
} from ".";
import botaoVoltar from "../../../img/botao-voltar.png";
export function Detalhes({
  produto,

  eventItensNoCarrinho,

  setTrocarTela,
}) {
  const [adicionarQuantidade, setAdcionarQuantidade] = useState(1);

  const irParaCarrinho = () => {
    eventItensNoCarrinho({
      id: produto.id,
      name: produto.name,
      value: produto.value,
      img: produto.img,
      quantidade: adicionarQuantidade,
    });
    setTrocarTela("carrinho-2");
  };

  return (
    <ContainerGeral>
      <Voltar onClick={() => setTrocarTela("home")}>
        <ImagemVoltar src={botaoVoltar} />

        <BotaoVoltar>voltar</BotaoVoltar>
      </Voltar>
      <MainConteudo>
        <Article>
          <Conteiner>
            <Slides>
              <Input1 type="radio" name="slide" id="slide1" />
              <Input2 type="radio" name="slide" id="slide2" />
              <Input3 type="radio" name="slide" id="slide3" />
              <Input4 type="radio" name="slide" id="slide4" />
              <Input5 type="radio" name="slide" id="slide5" />

              <Slide className="s1">
                <ImgConteudo src={produto.img} />
              </Slide>
              <Slide>
                <ImgConteudo src={produto.img} />
              </Slide>
              <Slide>
                <ImgConteudo src={produto.img} />
              </Slide>
              <Slide>
                <ImgConteudo src={produto.img} />
              </Slide>
              <Slide>
                <ImgConteudo src={produto.img} />
              </Slide>
            </Slides>
            <Navigation>
              <Label for="slide1">
                <ImgLabel src={produto.img} />
              </Label>
              <Label for="slide2">
                <ImgLabel src={produto.img} />
              </Label>
              <Label for="slide3">
                <ImgLabel src={produto.img} />
              </Label>
              <Label for="slide4">
                <ImgLabel src={produto.img} />
              </Label>
              <Label for="slide5">
                <ImgLabel src={produto.img} />
              </Label>
            </Navigation>
          </Conteiner>
        </Article>
        <SecondArticle>
          <h2>{produto.name}</h2>
          <div>
            <h4>
              <s>
                {((produto.value * 120) / 100).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </s>{" "}
              <Porcentagem>20% off</Porcentagem>
            </h4>
            <h2>
              {produto.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h2>
          </div>

          <AddContainer>
            <h4>Quantidade:</h4>
            <AddStyle>
              <AddButtons
                onClick={() =>
                  setAdcionarQuantidade((quant) => (quant > 1 ? quant - 1 : 0))
                }
              >
                -
              </AddButtons>
              <AddQuantidade>{adicionarQuantidade}</AddQuantidade>
              <AddButtons
                onClick={() => setAdcionarQuantidade((quant) => quant + 1)}
              >
                +
              </AddButtons>
            </AddStyle>
          </AddContainer>

          <BotaoCarrinho onClick={() => irParaCarrinho()}>
            Colocar no carrinho
          </BotaoCarrinho>
        </SecondArticle>
      </MainConteudo>
    </ContainerGeral>
  );
}
