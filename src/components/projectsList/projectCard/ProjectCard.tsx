import { CSSProperties, FC, SyntheticEvent } from "react";
import { Project } from "mockData/projects";
import {
  getRandomBgColor,
  getContrastTextColor,
} from "components/utils/colorGenerator";
import styles from "./styles.module.scss";

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { name, url, rating, created_at } = project;

  const bgColor = getRandomBgColor();
  const textColor = getContrastTextColor(bgColor);

  const handleDelete = (event: SyntheticEvent) => {
    event.preventDefault();

    console.log("deleted");
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
        <span className={styles.delete} onClick={handleDelete} />
        <span className={styles.rating}>{"⭐".repeat(rating || 0)}</span>
      </div>
    </a>
  );
};

export default ProjectCard;
