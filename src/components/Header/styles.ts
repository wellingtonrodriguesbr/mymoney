import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    @media (max-width: 768px) {
      width: 160px;
    }
  }

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--purple-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }
`;
