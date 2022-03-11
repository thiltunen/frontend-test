import { FC } from 'react';
import styles from './styles.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Awesome projects</h1>
    </header>
  );
};

export default Header;
