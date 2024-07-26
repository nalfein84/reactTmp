import { createSlice } from '@reduxjs/toolkit';
import { Elang, Etheme } from '../../../Enum/Enum';
import { ISettingReducer } from '../../../Interfaces';

const initialState: ISettingReducer = {
  lang: Elang.fr,
  theme: Etheme.light,
  isBottomNavigation: false
};

const SettingReducer = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    setLang: (state: ISettingReducer, action) => {
      state.lang = action.payload.lang
    },
    setTheme: (state: ISettingReducer, action) => {
      state.theme = action.payload.theme
    },
    setIsBottomNavigation: (state: ISettingReducer, action) => {
      state.isBottomNavigation = action.payload.isBottomNavigation
    },
  }
});

export const { setLang, setTheme, setIsBottomNavigation } = SettingReducer.actions;

export default SettingReducer.reducer;
