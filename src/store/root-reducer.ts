import { combineReducers } from '@reduxjs/toolkit';
import { characterSlice } from './character-reducer/character-reducer';

export const rootReducer = combineReducers({
  character: characterSlice.reducer,
});
