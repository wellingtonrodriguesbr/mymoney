import Modal from "react-modal";
import { FormContainer, TransactionTypeContainer, RadioBox } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incoming.svg";
import outcomeImg from "../../assets/withdraw.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleNewTransactionModalClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  handleNewTransactionModalClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");

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

      <FormContainer>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
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
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
};
