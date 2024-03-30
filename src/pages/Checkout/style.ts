import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    color: ${({ theme }) => theme["base-subtitle"]};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const FormContainer = styled.div`
  padding: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["base-card"]};
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Heading = styled.div`
  display: flex;
  gap: 8px;

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
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`;

export const PaymentOptions = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
