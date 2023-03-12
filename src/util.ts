import { Character } from './types/character';

export const getFilter = () => localStorage.getItem('filter');

export const changeFilter = (inputText: string) => localStorage.setItem('filter', inputText);


export const getFilteredCharacters = (characters: Character[]) => {
  const text = getFilter()?.toLowerCase() || '';
  const filteredCharacters = characters.filter((item) => item.name.replace(/ /g,'').toLowerCase().includes(text.replace(/ /g,'')));
  return filteredCharacters;
};
