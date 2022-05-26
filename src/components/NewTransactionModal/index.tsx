import Modal from "react-modal";
import { FormContainer, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/incoming.svg";
import outcomeImg from "../../assets/withdraw.svg";

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  handleNewTransactionModalClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  handleNewTransactionModalClose,
}: NewTransactionModalProps) => {
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
          <button type="button">
            <img src={incomeImg} alt="" />
            Entrada
          </button>
          <button type="button">
            <img src={outcomeImg} alt="" />
            Saída
          </button>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
};
