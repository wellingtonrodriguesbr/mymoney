import Modal from "react-modal";

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
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
};
