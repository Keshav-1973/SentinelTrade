import {ThemeTypes} from '@constants/constants';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface initialLearnState {
  currentTheme: ThemeTypes;
}

const initialState: initialLearnState = {
  currentTheme: ThemeTypes.LIGHT,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeTypes>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const ThemeActions = {
  ...ThemeSlice.actions,
};
