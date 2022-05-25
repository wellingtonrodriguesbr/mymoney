import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  handleNewTransactionModalOpen: () => void;
}

export const Header = ({ handleNewTransactionModalOpen }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo my money" />
        <button onClick={handleNewTransactionModalOpen} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
