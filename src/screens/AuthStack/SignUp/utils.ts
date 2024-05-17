import * as yup from 'yup';

export type SignupInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignUpSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
});
