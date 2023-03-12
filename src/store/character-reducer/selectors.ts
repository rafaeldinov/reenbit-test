import { Character } from '../../types/character';
import { State } from '../../types/state';
import { createSelector } from 'reselect';

export const getCharacters = (state: State): Character[] => state['character'].characters;
export const getCharacter = (state: State): Character | undefined => state['character'].character;

export const getSortedCharacters = createSelector(
  getCharacters,
  (characters) => characters.slice()
    .sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
);
