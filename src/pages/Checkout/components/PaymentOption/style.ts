import styled from "styled-components";

export interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 16px;
  width: 178px;

  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${(props) => props.theme["base-button"]};

  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 160%;
  font-weight: 400;

  transition: all 0.2s;

  ${(props) =>
    props.selected &&
    `
        background-color: ${props.theme["purple-light"]};
        border-color: ${props.theme["purple"]};
    `}
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  label {
    display: none;
  }
`;
