import { Container } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

interface Props {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={16} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={16} />
      </button>
    </Container>
  );
}
