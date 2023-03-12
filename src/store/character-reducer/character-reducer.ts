import { createSlice } from '@reduxjs/toolkit';
import { fetchCharacterAction, fetchCharactersAction } from '../api-action';
import { Character } from '../../types/character';
import { getFilter, getFilteredCharacters } from '../../util';

type InitialState = {
  characters: Character[];
  character: Character | undefined;
}

const initialState: InitialState = {
  characters: [],
  character: undefined,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharactersAction.fulfilled, (state, action) => {
        if(getFilter()) {
          const characters = getFilteredCharacters(action.payload.results);
          state.characters = characters;
        }else {
          state.characters = action.payload.results;
        }
      })
      .addCase(fetchCharacterAction.fulfilled, (state, action) => {
        state.character = action.payload;
      });
  }
});
