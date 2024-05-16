import * as yup from 'yup';

export type ForgotPassInfo = {
  email: string;
};

export const ForgotPassSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
});
