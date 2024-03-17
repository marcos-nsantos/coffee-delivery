import cafeExpressoTradicional from "../../../../assets/img/coffee/caffee-expresso-tradicional.png";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import {
  CoffeeDescription,
  CoffeeImage,
  CoffeeItem,
  CoffeeTags,
  CoffeeTitle,
  Control,
  Order,
  Price,
  QuantityInput,
} from "./styles.ts";

export function CoffeeCard() {
  const theme = useTheme();

  return (
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
  );
}
