import { useContext, CSSProperties, FC, SyntheticEvent } from "react";
import { getRandomBgColor, getContrastTextColor } from "utils/colorGenerator";
import { ProjectsContext } from "contexts/ProjectsContext";
import { Project } from "mockData/projects";
import styles from "./styles.module.scss";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { id, name, url, rating, created_at } = project;
  const { deleteProject } = useContext(ProjectsContext);

  // New colors are generated on reRender
  const bgColor = getRandomBgColor();
  const textColor = getContrastTextColor(bgColor);

  const handleDelete = (event: SyntheticEvent, id: string) => {
    event.preventDefault();
    deleteProject(id);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.cardLinkWr}
    >
      <div
        className={styles.card}
        style={
          { "--bgColor": bgColor, "--textColor": textColor } as CSSProperties
        }
      >
        <h2 className={styles.projectName}>{name}</h2>
        <span
          className={styles.delete}
          onClick={(event) => handleDelete(event, id)}
        />
        <div className={styles.cardBottom}>
          <span className={styles.rating}>{"⭐".repeat(rating || 0)}</span>
          <span>Date: {created_at.substring(0, 10)}</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
