import { Character } from './character'

export type CharacterData = {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: null
  },
  results: Character[],
}
