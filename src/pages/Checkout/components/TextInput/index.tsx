import { Container, ErrorMessage } from "./style.ts";
import { FieldError } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  gridArea: string;
}

export function TextInput({ error, gridArea, ...rest }: Props) {
  return (
    <Container style={{ gridArea: gridArea }}>
      <input {...rest} />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
}
