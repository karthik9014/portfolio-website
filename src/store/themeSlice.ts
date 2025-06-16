import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../types';

interface ThemeState {
  currentTheme: ThemeType;
}

const initialState: ThemeState = {
  currentTheme: 'modern',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;