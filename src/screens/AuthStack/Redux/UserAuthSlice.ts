import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AuthService} from '@screens/AuthStack/Api/Api';
// import {
//   InAppToastManager,
//   SUCCESS_TOAST,
//   ERROR_TOAST,
// } from '@components/Common/ToastManager/InAppToastManager';
import {User} from '@react-native-google-signin/google-signin';
import {
  RegisterFormData,
  FindUserFormData,
} from '@screens/AuthStack/AuthRoutes';
// import {mapAuthCodeToMessage} from '@helpers/CommonFunctions/CommonFunctions';

interface InitialUserAuthState {
  googleUserState: User;
  isLoggedIn: boolean;
  isOnboarded: boolean;
}

const initialUserAuthState: InitialUserAuthState = {
  googleUserState: {} as User,
  isLoggedIn: false,
  isOnboarded: false,
};

export const getProfileDetails = createAsyncThunk(
  'learn/getProfileDetails',
  async (_, {dispatch, getState}) => {
    try {
    } catch (error) {}
  },
);

export const UserAuthSlice = createSlice({
  name: 'userAuth',
  initialState: initialUserAuthState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.googleUserState = action.payload;
      state.isLoggedIn = true;
    },
    onBoard: (state, action: PayloadAction<boolean>) => {
      state.isOnboarded = action.payload;
    },
  },
});

export const UserAuthActions = {
  ...UserAuthSlice.actions,
};
