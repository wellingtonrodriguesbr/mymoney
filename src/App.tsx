import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsTable } from "./components/TransactionsTable";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }

  function handleNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleNewTransactionModalOpen={handleNewTransactionModalOpen} />
      <Dashboard />
      <TransactionsTable />
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleNewTransactionModalClose={handleNewTransactionModalClose}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
};
