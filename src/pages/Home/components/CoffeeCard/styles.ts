import styled from "styled-components";

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme["base-card"]};
  width: 16rem;
  padding: 0 1.25rem 1.25rem;
  border-radius: 6px 36px;
`;

export const CoffeeImage = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`;

export const CoffeeTags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${(props) => props.theme["yellow-light"]};

    font-size: 10px;
    font-weight: bold;
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
  }
`;

export const CoffeeTitle = styled.h3`
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;

  margin-top: 1rem;
`;

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.438rem;

  margin-top: 2rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-text"]};
  }

  span:last-child {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    height: 2.375rem;

    background-color: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 8px;
  }
`;
