import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCharactersAction } from '../../store/api-action';
import { getSortedCharacters } from '../../store/character-reducer/selectors';
import Card from '../card/card';

export default function Cards(): JSX.Element {
  const dispatch = useAppDispatch();

  const characters = useAppSelector(getSortedCharacters);

  useEffect(() => {
    dispatch(fetchCharactersAction());
  }, [dispatch]);

  return (
    <div className="cards">
      {characters?.map((item) => (
        <Card key={item.id} character={item} />
      ))}
    </div>
  );
}
