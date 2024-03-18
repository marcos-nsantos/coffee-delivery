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
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../context/CoffeeProvider.tsx";

export function CoffeeCard() {
  const [quantity, setQuantity] = useState(1);
  const { addCoffee } = useContext(CoffeeContext);

  const theme = useTheme();

  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function addCurrentCoffeeToCart() {
    const newCoffee = {
      id: String(new Date().getTime()),
      nome: "Expresso Tradicional",
      imagem: cafeExpressoTradicional,
      quantity,
    };
    addCoffee(newCoffee);
    setQuantity(1);
    window.scroll(0, 0);
  }

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
            <button onClick={decrementQuantity}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus size={14} />
            </button>
          </QuantityInput>

          <button onClick={addCurrentCoffeeToCart}>
            <ShoppingCart size={22} color={theme["base-card"]} />
          </button>
        </Order>
      </Control>
    </CoffeeItem>
  );
}
