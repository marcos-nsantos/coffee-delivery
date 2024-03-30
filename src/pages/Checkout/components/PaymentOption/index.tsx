import { Container, ContainerProps } from "./style.ts";

export function PaymentOption({ children, selected, ...rest }: ContainerProps) {
  return (
    <Container selected={selected}>
      {children}
      <label htmlFor="payment"></label>
      <input id="payment" type="radio" {...rest} />
    </Container>
  );
}
