import styled from "styled-components";

interface IntroProps {
  backgroundImage: string;
}

export const Container = styled.section<IntroProps>`
  height: 34rem;
  padding: 5.875rem 0;

  background-image: url(${(props) => props.backgroundImage});
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 2rem;

  max-width: 72.5rem;
  margin: 0 auto;
`;

export const IntroDescription = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4.125rem;

  max-width: 38rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  & strong {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1.25rem;
`;

type ItemProps = {
  bg: string;
};

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & svg {
    padding: 0.5rem;
    background-color: ${(props) => props.bg};
    border-radius: 100%;
  }

  & span {
    font-size: 16px;
  }
`;
