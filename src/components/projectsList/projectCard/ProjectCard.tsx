import { useContext, CSSProperties, FC, SyntheticEvent, useMemo } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { getRandomBgColor, getContrastTextColor } from 'utils/colorGenerator';
import { ProjectsContext } from 'contexts/ProjectsContext';
import { Project } from 'mockData/projects';
import { ModalContext } from 'contexts/ModalContext';
import Modal from 'components/modal/Modal';
import styles from './styles.module.scss';

interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  const { id, name, url, rating, created_at } = project;
  const { deleteProject, updateColors } = useContext(ProjectsContext);
  const { handleOpenModal, handleCloseModal } = useContext(ModalContext);

  // New colors are generated on each rerender / page update based on switcher
  const bgColor = useMemo(() => getRandomBgColor(), []);
  const textColor = useMemo(() => getContrastTextColor(bgColor), [bgColor]);

  const randomBgColor = getRandomBgColor();
  const randomTextColor = getContrastTextColor(randomBgColor);

  const handleDelete = (event: SyntheticEvent, id: string) => {
    deleteProject(id);
  };

  const handleClick = (event: SyntheticEvent, openIn: string) => {
    event.stopPropagation();
    openIn === 'tab' ? window.open(url) : window.open(url, '_blank', 'popup');
    handleCloseModal();
  };

  return (
    <div
      onClick={() => handleOpenModal(`${id}Modal`)}
      className={styles.cardWr}
    >
      <div
        className={styles.card}
        style={
          {
            '--bgColor': updateColors ? randomBgColor : bgColor,
            '--textColor': updateColors ? randomTextColor : textColor,
          } as CSSProperties
        }
      >
        <h2 className={styles.projectName}>{name}</h2>
        <span
          className={styles.delete}
          onClick={(event) => handleDelete(event, id)}
        />
        <div className={styles.cardBottom}>
          <span className={styles.rating}>{'⭐'.repeat(rating || 0)}</span>
          <span>Date: {created_at.substring(0, 10)}</span>
        </div>
      </div>

      <Modal id={`${id}Modal`} title="Open link with">
        <DialogActions>
          <Button onClick={(event) => handleClick(event, 'popup')}>
            New Window
          </Button>
          <Button onClick={(event) => handleClick(event, 'tab')}>
            New Tab
          </Button>
        </DialogActions>
      </Modal>
    </div>
  );
};

export default ProjectCard;
