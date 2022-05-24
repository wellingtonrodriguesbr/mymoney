import { Container } from "./styles";

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 5.000,00</td>
            <td>Freelance</td>
            <td>24/05/2022</td>
          </tr>

          <tr>
            <td>Carne</td>
            <td className="withdraw">-R$ 50,00</td>
            <td>Supermercado</td>
            <td>29/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
