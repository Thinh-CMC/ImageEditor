import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locale: 'en-GB',
};

export const localeSlice = createSlice({
  name: 'Locale Store',
  initialState,
  reducers: {
    setLocale(state, action) {
      state.locale = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocale, setCurrency } = localeSlice.actions;

export default localeSlice.reducer;
