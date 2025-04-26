import * as Yup from 'yup';

const newWatchListSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
});

export {newWatchListSchema};
