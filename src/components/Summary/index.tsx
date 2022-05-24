import { Container } from "./styles";
import incomeImg from "../../assets/incoming.svg";
import withDrawImg from "../../assets/withdraw.svg";
import totalImg from "../../assets/Total.svg";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 5.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={withDrawImg} alt="Saídas" />
        </header>
        <strong>- R$ 50,00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 4.950,00</strong>
      </div>
    </Container>
  );
};
