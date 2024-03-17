import { IntroSection } from "./components/IntroSection";
import cafeExpressoTradicional from "../../assets/img/coffee/caffee-expresso-tradicional.png";
import {
  CoffeeContainer,
  CoffeeDescription,
  CoffeeImage,
  CoffeeItem,
  CoffeeList,
  CoffeeListTitle,
  CoffeeTags,
  CoffeeTitle,
  Control,
  Order,
  Price,
  QuantityInput,
} from "./styles.ts";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

export function Home() {
  const theme = useTheme();

  return (
    <main>
      <IntroSection />

      <CoffeeContainer>
        <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

        <CoffeeList>
          <CoffeeItem>
            <CoffeeImage src={cafeExpressoTradicional} />

            <CoffeeTags>
              <span>Tradicional</span>
            </CoffeeTags>
            <CoffeeTitle>Expresso Tradicional</CoffeeTitle>
            <CoffeeDescription>
              O tradicional café feito com água quente e grãos moídos
            </CoffeeDescription>

            <Control>
              <Price>
                <span>R$</span>
                <span>9,99</span>
              </Price>

              <Order>
                <QuantityInput>
                  <button>
                    <Minus size={14} />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus size={14} />
                  </button>
                </QuantityInput>

                <button>
                  <ShoppingCart size={22} color={theme["base-card"]} />
                </button>
              </Order>
            </Control>
          </CoffeeItem>
        </CoffeeList>
      </CoffeeContainer>
    </main>
  );
}
