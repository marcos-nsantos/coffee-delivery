import background from "../../../../assets/img/background.svg";
import coffeeIntro from "../../../../assets/img/coffee-intro.png";
import { ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import {
  Container,
  Intro,
  IntroDescription,
  Item,
  Items,
  TextContainer,
} from "./styles.ts";

export function IntroSection() {
  const theme = useTheme();

  return (
    <Container backgroundImage={background}>
      <Intro>
        <IntroDescription>
          <TextContainer>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TextContainer>

          <Items>
            <Item bg={theme["yellow-dark"]}>
              <ShoppingCart
                color={theme["background"]}
                weight="fill"
                size={32}
              />
              <span>Compra simple e segura</span>
            </Item>
            <Item bg={theme["base-text"]}>
              <ShoppingCart
                color={theme["background"]}
                weight="fill"
                size={32}
              />
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item bg={theme["yellow"]}>
              <ShoppingCart
                color={theme["background"]}
                weight="fill"
                size={32}
              />
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item bg={theme["purple"]}>
              <ShoppingCart
                color={theme["background"]}
                weight="fill"
                size={32}
              />
              <span>O café chega fresquinho até você</span>
            </Item>
          </Items>
        </IntroDescription>

        <div>
          <img src={coffeeIntro} alt="" />
        </div>
      </Intro>
    </Container>
  );
}
