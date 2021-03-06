import { FC, useContext } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { yupResolver } from '@hookform/resolvers/yup';
// MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import DialogActions from '@mui/material/DialogActions';
// Local
import Modal from 'components/modal/Modal';
import { ProjectsContext } from 'contexts/ProjectsContext';
import { ModalContext } from 'contexts/ModalContext';
import { validationSchema } from './validation';

export interface IFormValues {
  name: string;
  url: string;
  rating: number;
}

const NewProjectModal: FC = () => {
  const { addProject } = useContext(ProjectsContext);
  const { handleCloseModal } = useContext(ModalContext);
  const {
    reset,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      url: '',
      rating: 0,
    },
  });

  const onClose = () => {
    reset();
    handleCloseModal();
  };

  const onSubmit: SubmitHandler<IFormValues> = (formValues) => {
    const currentDate = new Date();
    const localISOTime = new Date(
      currentDate.getTime() - currentDate.getTimezoneOffset() * 60000
    ).toISOString();

    addProject({
      id: uuidv4(),
      ...formValues,
      created_at: localISOTime,
    });

    reset();
    handleCloseModal();
  };

  return (
    <Modal
      id="newProjectModal"
      title="Add new project"
      handleOutsideClick={reset}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Project Title"
              variant="standard"
              fullWidth
              sx={{ marginBottom: '20px' }}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="url"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Project URL"
              variant="standard"
              fullWidth
              sx={{ marginBottom: '20px' }}
              error={Boolean(errors.url)}
              helperText={errors.url?.message}
              autoFocus={false}
              onFocus={() =>
                setValue('url', 'https://github.com/', { shouldValidate: true })
              }
            />
          )}
        />

        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <Rating
              name={field.name}
              onChange={field.onChange}
              size="large"
              value={Number(field.value)}
            />
          )}
        />

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outlined" type="submit">
            OK
          </Button>
        </DialogActions>
      </form>
    </Modal>
  );
};

export default NewProjectModal;
