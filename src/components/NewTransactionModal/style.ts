import styled from "styled-components";

export const FormContainer = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-title);

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    &:focus {
      outline: none;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: none;
    color: #fff;
    font-size: 1rem;
    text-align: center;
    height: 4rem;
    background-color: var(--green);
    margin-top: 1.5rem;
    transition: 0.3s;
    font-weight: 600;
    text-transform: uppercase;

    &:focus {
      outline: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc9510",
  red: "#e52e4d10",
};

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 4rem;
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "transparent"};
  border: 1px solid
    ${(props) => (props.isActive ? colors[props.activeColor] : "#d7d7d7")};
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-title);
  font-size: 1rem;

  img {
    width: 20px;
    height: 20px;
  }
`;
