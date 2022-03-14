import { FC, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ProjectsContext } from 'contexts/ProjectsContext';
import ProjectCard from 'components/projectsList/projectCard/ProjectCard';
import styles from './styles.module.scss';

const ProjectsList: FC = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsList;
