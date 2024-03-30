import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  height: 2.375rem;
  width: 4.5rem;

  button {
    background-color: transparent;
  }

  button svg {
    color: ${(props) => props.theme["purple"]};
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  span {
    color: ${(props) => props.theme["base-title"]};
  }
`;
