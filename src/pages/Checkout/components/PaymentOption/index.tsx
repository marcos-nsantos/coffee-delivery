import { Container } from "./style.ts";
import { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  selected: boolean;
  register: any;
  value: string;
}

export function PaymentOption({
  children,
  selected,
  register,
  ...rest
}: Props) {
  return (
    <Container selected={selected}>
      <input
        id="paymentMethod"
        type="radio"
        {...rest}
        {...register("paymentMethod")}
      />
      {children}
    </Container>
  );
}
