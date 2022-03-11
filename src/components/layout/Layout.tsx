import { FC } from 'react';
import styles from './styles.module.scss';

const Layout: FC = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
