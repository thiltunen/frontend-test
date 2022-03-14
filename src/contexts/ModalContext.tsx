import { useState, createContext, ReactNode, FC } from 'react';

interface IModalContext {
  modalResolver: { modalId: string; isOpen: boolean };
  handleOpenModal: (modalId: string) => void;
  handleCloseModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
  modalResolver: { modalId: '', isOpen: false },
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

export const ModalProvider: FC<ReactNode> = ({ children }) => {
  const [modalResolver, setmModalResolver] = useState({
    modalId: '',
    isOpen: false,
  });

  const handleOpenModal = (modalId: string) =>
    setmModalResolver({ modalId, isOpen: true });

  const handleCloseModal = () => {
    setmModalResolver({ modalId: '', isOpen: false });
  };

  return (
    <ModalContext.Provider
      value={{ modalResolver, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
