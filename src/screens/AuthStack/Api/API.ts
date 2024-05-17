import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
import {EnvVars} from '@config/env';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {FindUserFormData} from '@screens/AuthStack/AuthRoutes';

try {
  GoogleSignin.configure({
    webClientId: EnvVars.OAuth.google.webClientId,
  });
} catch (error) {
  console.log(error, 'configure');
}

export const AuthService = {
  SigninViaGoogle: async (): Promise<User> => {
    return await GoogleSignin.signIn();
  },

  SignOutViaGoogle: async (): Promise<null> => {
    return await GoogleSignin.signOut();
  },

  CreateUserWithEmailAndPassword: async (
    credentials: FindUserFormData,
  ): Promise<FirebaseAuthTypes.UserCredential> => {
    return await auth().createUserWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
  },

  SignInViaEmailPass: async (
    credentials: FindUserFormData,
  ): Promise<FirebaseAuthTypes.UserCredential> => {
    return await auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    );
  },

  CheckIfEmailExists: async (email: string): Promise<string[]> => {
    return await auth().fetchSignInMethodsForEmail(email);
  },

  CheckIfEmailVerified: async (): Promise<boolean | undefined> => {
    return auth()?.currentUser?.emailVerified;
  },

  VerifyEmail: async (code: string): Promise<void> => {
    return auth()?.applyActionCode(code);
  },
};
