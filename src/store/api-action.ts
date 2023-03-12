import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../types/state.js';
import { APIRoute, AppRoute } from '../const';
import { CharacterData } from '../types/character-data';
import { Character } from '../types/character';
import { redirectToRoute } from './action';

export const fetchCharactersAction = createAsyncThunk<CharacterData, undefined, {
  extra: AxiosInstance;
}>(
  'character/fetchCharacters',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<CharacterData>(APIRoute.Characters);
    return data;
  },
);

export const fetchCharacterAction = createAsyncThunk<Character | undefined, string, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'character/fetchCharacter',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Character>(`${APIRoute.Characters}/${id}`);
      return data;
    }catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }

  },
);
