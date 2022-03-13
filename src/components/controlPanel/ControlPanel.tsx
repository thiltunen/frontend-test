import { FC, useEffect, useState, useContext } from 'react';
import cn from 'classnames';
// MUI
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
// Local
import { ProjectsContext } from 'contexts/ProjectsContext';
import { ModalContext } from 'contexts/ModalContext';
import NewProjectModal from './newProjectModal/NewProjectModal';
import styles from './styles.module.scss';

const ControlPanel: FC = () => {
  const { sortByRating, sortByDate } = useContext(ProjectsContext);
  const { handleOpenModal } = useContext(ModalContext);
  const [sortBy, setSortBy] = useState('');
  const [sortAscending, setSortAscending] = useState(false);

  useEffect(() => {
    if (sortBy === 'rating') sortByRating(sortAscending);
    if (sortBy === 'date') sortByDate(sortAscending);
  }, [sortBy, sortAscending]);

  return (
    <div className={styles.controlPanel}>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        className={styles.addBtn}
        onClick={handleOpenModal}
      >
        <span className={styles.btnText}>Add new project</span>
      </Button>

      <div className={styles.sortWr}>
        <FormControl className={styles.sorting}>
          <InputLabel
            id="sort-by-helper-label"
            sx={{
              color: '#1976d2',
              fontWeight: 500,
              fontSize: '14px',
              textTransform: 'upperCase',
            }}
          >
            Sort By
          </InputLabel>
          <Select
            labelId="sort-by-helper-label"
            value={sortBy}
            label="Sort By"
            onChange={(event) => setSortBy(event.target.value)}
            sx={{
              '&:hover': {
                bgcolor: 'rgba(25, 118, 210, 0.04)',
                '&& fieldset': {
                  borderColor: 'rgba(25, 118, 210, 0.5)',
                },
              },
              color: '#1976d2',
              fontWeight: 500,
              fontSize: '14px',
              textTransform: 'upperCase',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(25, 118, 210, 0.5)',
              },
              '& .MuiSelect-icon': {
                fill: '#1976d2',
              },
            }}
          >
            <MenuItem
              color="primary"
              value={'rating'}
              sx={{
                color: '#1976d2',
                textTransform: 'upperCase',
              }}
            >
              Rating
            </MenuItem>
            <MenuItem
              color="primary"
              value={'date'}
              sx={{
                color: '#1976d2',
                textTransform: 'upperCase',
              }}
            >
              Date
            </MenuItem>
          </Select>
        </FormControl>

        <ArrowDownwardIcon
          color="primary"
          className={cn(styles.sortIcon, {
            [styles.sortIconAsc]: sortAscending,
          })}
          onClick={() => setSortAscending(!sortAscending)}
        />
      </div>

      <NewProjectModal />
    </div>
  );
};

export default ControlPanel;
