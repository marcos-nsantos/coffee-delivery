import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;

    color: ${(props) => props.theme["base-text"]};
    width: 100%;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const ErrorMessage = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 400;
  color: red;
`;
