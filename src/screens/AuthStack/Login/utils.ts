import * as yup from 'yup';

export type LoginInfo = {
  email: string;
  password: string;
};

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
});
