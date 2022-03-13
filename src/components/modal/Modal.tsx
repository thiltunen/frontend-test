import { useContext, FC, ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalContext } from 'contexts/ModalContext';
import styles from './styles.module.scss';

interface Props {
  title: string;
  children: ReactNode;
}

const Modal: FC<Props> = ({ title, children }) => {
  const { isOpen, handleCloseModal } = useContext(ModalContext);

  return (
    <Dialog open={isOpen} onClose={handleCloseModal} fullWidth maxWidth="xs">
      <DialogTitle className={styles.title}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
