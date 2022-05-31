import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length
            ? transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.value)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {transaction.type === "withdraw" ? "Saída" : "Entrada"}
                  </td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </Container>
  );
};
