import * as yup from 'yup';
import { IFormValues } from './NewProjectModal';

export const validationSchema: yup.SchemaOf<IFormValues> = yup.object({
  name: yup.string().required('Required'),
  url: yup
    .string()
    .required('Required')
    .lowercase()
    .matches(
      /https:\/\/github.com\//,
      'Add link to a project on GitHub: https://github.com/...'
    ),
  rating: yup.number().required('Required'),
});
