import styled from "styled-components";

export const Container = styled.header`
  max-width: 72.5rem;
  padding: 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    display: flex;
    align-items: center;

    position: relative;

    background-color: ${(props) => props.theme["yellow-light"]};

    padding: 0.5rem;
    border-radius: 6px;

    span {
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme["white"]};
      background-color: ${(props) => props.theme["yellow-dark"]};

      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;

export const CityContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["purple-light"]};

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
