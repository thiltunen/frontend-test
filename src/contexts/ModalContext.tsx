import { useState, createContext, ReactNode, FC } from 'react';

interface IModalContext {
  isOpen: boolean;
  handleOpenModal: VoidFunction;
  handleCloseModal: VoidFunction;
}

export const ModalContext = createContext<IModalContext>({
  isOpen: false,
  handleOpenModal: () => {},
  handleCloseModal: () => {},
});

export const ModalProvider: FC<ReactNode> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
