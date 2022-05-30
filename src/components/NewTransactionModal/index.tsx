import Modal from "react-modal";
import { FormContainer, TransactionTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incoming.svg";
import outcomeImg from "../../assets/withdraw.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleNewTransactionModalClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  handleNewTransactionModalClose,
}: NewTransactionModalProps) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");

  function handleCreateNewTrasanction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      category,
      value,
      type,
    };

    api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleNewTransactionModalClose}
      overlayClassName="modal-overlay"
      className="modal"
    >
      <button className="close-modal" onClick={handleNewTransactionModalClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <FormContainer onSubmit={handleCreateNewTrasanction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="" />
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => setType("withdraw")}
          >
            <img src={outcomeImg} alt="" />
            Saída
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
};
