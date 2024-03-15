import styled from "styled-components";

export const Container = styled.header`
  max-width: 72.5rem;
  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CityContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: #ebe5f9;
`;

export const ShoppingCartContent = styled.div`
  display: flex;
  align-items: center;

  background-color: #f1e9c9;

  padding: 0.5rem;
  border-radius: 6px;
`;
