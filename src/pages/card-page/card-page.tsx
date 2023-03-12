import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Preloader from '../../components/preloader/preloader';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCharacterAction } from '../../store/api-action';
import { getCharacter } from '../../store/character-reducer/selectors';


export default function CardPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  const character = useAppSelector(getCharacter);

  useEffect(() => {
    if(id) {
      dispatch(fetchCharacterAction(id));
    }
  }, [id, dispatch]);

  const handleBackClick = () => navigate(`${AppRoute.Catalog}`);

  if(!character) {
    return <Preloader />;
  }

  return (
    <>
      <button onClick={handleBackClick} className="back-button">
        <img src="/images/arrow-back.svg" alt="arrow-back icon" width="24" height="24" />
        <span className="card-page__button-text">go back</span>
      </button>
      <div className="card-page">
        <img className="card-page__avatar" src={character?.image} alt="avatar" width="300" height="300" />
        <span className="card-page__name">{character?.name}</span>
        <h3 className="card-page__title">Informations</h3>
        <ul className="card-page__info">
          <li>
            <h4>Gender</h4>
            <span>{character?.gender}</span>
          </li>
          <li>
            <h4>Status</h4>
            <span>{character?.status}</span>
          </li>
          <li>
            <h4>Specie</h4>
            <span>{character?.species}</span>
          </li>
          <li>
            <h4>Origin</h4>
            <span>{character?.origin.name}</span>
          </li>
          <li>
            <h4>Type</h4>
            <span>{character?.type}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
