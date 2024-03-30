import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;

  max-width: 72.5rem;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-card"]};
  width: 100%;
  min-width: 40rem;
`;

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span {
      color: ${({ theme }) => theme["base-subtitle"]};
    }

    p {
      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;
    }
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-gap: 1rem 0.75rem;
`;

export const PaymentOptions = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme["base-card"]};
  width: 100%;
  min-width: 28rem;
`;

export const Coffee = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 4rem;
      height: 4rem;
    }

    display: flex;
    align-items: stretch;
    gap: 1.25rem;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 6px 8px;
    background-color: ${({ theme }) => theme["base-button"]};
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme["base-hover"]};
    }

    span {
      font-family: "Roboto", sans-serif;
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 400;
      text-transform: uppercase;
      color: ${({ theme }) => theme["base-text"]};
    }
  }
`;

export const CartTotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
    }

    span:last-child {
    }
  }

  div:last-child {
    span {
      font-weight: bold;
    }
  }
`;

export const CheckoutButton = styled.button`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;

  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.yellow};

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["yellow-dark"]};
  }

  border-radius: 6px;
`;

export const PaymentErrorMessage = styled.p`
  font-weight: 400;
  color: red;
  font-size: 1.125rem;
  line-height: 130%;
`;
