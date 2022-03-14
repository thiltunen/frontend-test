import { useContext, FC, ReactNode, SyntheticEvent } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalContext } from 'contexts/ModalContext';
import styles from './styles.module.scss';

interface Props {
  id: string;
  title: string;
  handleOutsideClick?: () => void;
  children: ReactNode;
}

const Modal: FC<Props> = ({ id, title, handleOutsideClick, children }) => {
  const { modalResolver, handleCloseModal } = useContext(ModalContext);
  const { modalId, isOpen } = modalResolver;

  const onClose = (event: SyntheticEvent) => {
    event.stopPropagation();
    handleOutsideClick && handleOutsideClick();
    handleCloseModal();
  };

  return (
    <Dialog
      open={id === modalId && isOpen}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
