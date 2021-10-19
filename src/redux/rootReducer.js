import { combineReducers } from '@reduxjs/toolkit';

import localeReducer from './locale/slice';

export const rootReducer = combineReducers({
  localeReducer,
});
