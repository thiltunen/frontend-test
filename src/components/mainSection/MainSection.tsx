import { FC } from "react";
import ProjectsList from "components/projectsList/ProjectsList";
import ControlPanel from "components/controlPanel/ControlPanel";
import styles from "./styles.module.scss";

const MainSection: FC = () => {
  return (
    <main className={styles.mainSection}>
      <ControlPanel />
      <ProjectsList />
    </main>
  );
};

export default MainSection;
