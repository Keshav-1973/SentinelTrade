import * as yup from 'yup';

export type CreatePassWordInfo = {
  password: string;
  confirmPassword: string;
};

export const CreatePassWordSchema = yup.object().shape({
  password: yup.string().required('password is required'),
  confirmPassword: yup.string().required('confirm password is required'),
});
