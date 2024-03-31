import { Container, ErrorMessage } from "./style.ts";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  gridArea: string;
  register: any;
  value: string;
}

export function TextInput({
  error,
  gridArea,
  register,
  value,
  ...rest
}: Props) {
  return (
    <Container style={{ gridArea: gridArea }}>
      <input {...rest} {...register(value)} />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
