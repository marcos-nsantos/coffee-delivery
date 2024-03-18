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

export interface CoffeeCardProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
  amount: number;
  image: string;
}

interface Props {
  coffee: CoffeeCardProps;
}

export function CoffeeCard({coffee}: Props) {
  const [quantity, setQuantity] = useState(1);
  const {addCoffee} = useContext(CoffeeContext);
  
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
      id: coffee.id,
      nome: coffee.name,
      imagem: coffee.image,
      quantity,
    };
    addCoffee(newCoffee);
    setQuantity(1);
    window.scroll(0, 0);
  }
  
  return (
    <CoffeeItem>
      <CoffeeImage src={coffee.image}/>
      
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>
      <CoffeeTitle>{coffee.name}</CoffeeTitle>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      
      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.amount.toFixed(2)}</span>
        </Price>
        
        <Order>
          <QuantityInput>
            <button onClick={decrementQuantity}>
              <Minus size={14}/>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
              <Plus size={14}/>
            </button>
          </QuantityInput>
          
          <button onClick={addCurrentCoffeeToCart}>
            <ShoppingCart size={22} color={theme["base-card"]}/>
          </button>
        </Order>
      </Control>
    </CoffeeItem>
  );
}
