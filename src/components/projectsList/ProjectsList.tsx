import { FC, useContext } from 'react';
import { ProjectsContext } from 'contexts/ProjectsContext';
import ProjectCard from 'components/projectsList/projectCard/ProjectCard';
import styles from './styles.module.scss';

const ProjectsList: FC = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className={styles.wrapper}>
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
};

export default ProjectsList;
