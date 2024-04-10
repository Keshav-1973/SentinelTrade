import {RouteMetadata, ValueOf} from '@navigations/BasicNavigationTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const AuthRoutes = {
  LANDING: '/auth/landing',
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/signUp',
  FIND_USER: '/auth/findUser',
  VERIFY_EMAIL: '/auth/verifyEmail',
  PIN_ENTRY: '/auth/pinEntry',
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
  [AuthRoutes.PIN_ENTRY]: {
    name: 'Pin Entry',
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
  [AuthRoutes.PIN_ENTRY]: {payload: string} | undefined;
};

export type OnboardingScreenProps<t extends ValueOf<typeof AuthRoutes>> =
  NativeStackScreenProps<AuthScreenPropsType, t>;
