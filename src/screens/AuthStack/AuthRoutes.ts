import {RouteMetadata, ValueOf} from '@navigations/BasicNavigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const AuthRoutes = {
  LANDING: '/auth/landing',
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/signUp',
  FORGOT_PASSOWRD: '/auth/forgotPassword',
  FIND_USER: '/auth/findUser',
  VERIFY_EMAIL: '/auth/verifyEmail',
  PROTECT_WALLET: '/auth/protectWallet',
  BIOMETRICS: '/auth/biometrics',
  PIN: '/auth/pin',
  CHECK_EMAIL: '/auth/checkEmail',
  CREATE_PASSOWRD: '/auth/createPassword',
} as const;

export const AuthScreensMetadata: RouteMetadata<ValueOf<typeof AuthRoutes>> = {
  [AuthRoutes.LANDING]: {
    name: 'Landing',
  },
  [AuthRoutes.LOGIN]: {
    name: 'Login',
  },
  [AuthRoutes.SIGN_UP]: {
    name: 'SignUp',
  },
  [AuthRoutes.FIND_USER]: {
    name: 'Find User',
  },
  [AuthRoutes.VERIFY_EMAIL]: {
    name: 'Verify Email',
  },
  [AuthRoutes.PROTECT_WALLET]: {
    name: 'ProtectWallet',
  },
  [AuthRoutes.BIOMETRICS]: {
    name: 'Biometrics',
  },
  [AuthRoutes.PIN]: {
    name: 'Pin',
  },
  [AuthRoutes.FORGOT_PASSOWRD]: {
    name: 'Forgot Password',
  },
  [AuthRoutes.CHECK_EMAIL]: {
    name: 'Check Email',
  },
  [AuthRoutes.CREATE_PASSOWRD]: {
    name: 'Create Password',
  },
};

export type FindUserFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  fullName: string;
  password: string;
};

export enum EmailScreenType {
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

export type AuthScreenPropsType = {
  [AuthRoutes.LOGIN]: {payload: string} | undefined;
  [AuthRoutes.SIGN_UP]: {payload: FindUserFormData} | undefined;
  [AuthRoutes.FIND_USER]: {payload: string} | undefined;
  [AuthRoutes.LANDING]: {payload: string} | undefined;
  [AuthRoutes.VERIFY_EMAIL]:
    | {
        email: string;
        screenType: EmailScreenType;
        oobCode?: string;
      }
    | undefined;
  [AuthRoutes.PROTECT_WALLET]: {payload: string} | undefined;
  [AuthRoutes.BIOMETRICS]: {payload: string} | undefined;
  [AuthRoutes.PIN]: {payload: string} | undefined;
  [AuthRoutes.FORGOT_PASSOWRD]: {payload: string} | undefined;
  [AuthRoutes.CHECK_EMAIL]: {payload: string} | undefined;
  [AuthRoutes.CREATE_PASSOWRD]: {payload: string} | undefined;
};

export type OnboardingScreenProps<t extends ValueOf<typeof AuthRoutes>> =
  NativeStackScreenProps<AuthScreenPropsType, t>;
