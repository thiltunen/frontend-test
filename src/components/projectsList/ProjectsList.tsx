import { FC } from "react";
import { projects } from "mockData/projects";
import ProjectCard from "components/projectsList/projectCard/ProjectCard";
import styles from "./styles.module.scss";

const ProjectsList: FC = () => {
  return (
    <div className={styles.wrapper}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
