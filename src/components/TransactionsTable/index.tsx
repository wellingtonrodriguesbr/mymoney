import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: string;
  title: string;
  value: number;
  type: "deposit" | "withdraw";
  category: string;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    const { data } = await api.get("/transactions");
    setTransactions(data.transactions);
  }

  useEffect(() => {
    getTransactions();
  }, []);

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
                  <td>24/05/2022</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </Container>
  );
};
