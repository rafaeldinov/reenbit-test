import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchCharactersAction } from '../../store/api-action';
import { changeFilter, getFilter } from '../../util';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filtertext, setFilterText] = useState('');

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFilterText(evt.target.value);
    changeFilter(evt.target.value);
    dispatch(fetchCharactersAction());
  };

  useEffect(() => {
    setFilterText(getFilter() || '');
  }, []);

  return (
    <div className="search">
      <img className="search__icon" src="images/search-icon.png" alt="search icon" />
      <input onChange={handleSearchChange} value={filtertext} className="search__input" type="text" placeholder="Filter by name..." />
    </div>
  );
}
