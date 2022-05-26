import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    padding: 0 1rem;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border-radius: 0.25rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;
