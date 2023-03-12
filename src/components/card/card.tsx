import { useNavigate } from 'react-router-dom';
import { Character } from '../../types/character';

type Prop = {
  character: Character;
}

export default function Card({character}: Prop): JSX.Element {
  const navigate = useNavigate();

  const handleCardClick = () => navigate(`/character/${character.id}`);

  return (
    <div onClick={handleCardClick} className="card">
      <img className="card__avatar" src={character.image} width="240" height="168" alt="avatar" />
      <div className="card__info">
        <span className="card__info-name">{character.name}</span>
        <span className="card__info-specie">{character.species}</span>
      </div>
    </div>
  );
}
