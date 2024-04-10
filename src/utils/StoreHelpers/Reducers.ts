import {combineReducers} from '@reduxjs/toolkit';
import {UserAuthSlice} from '@screens/AuthStack/Redux/UserAuthSlice';
import {ThemeSlice} from '@themes/redux/ThemeSlice';

export const rootReducer = combineReducers({
  theme: ThemeSlice.reducer,
  userAuth: UserAuthSlice.reducer,
});
