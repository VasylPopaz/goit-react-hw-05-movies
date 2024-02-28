import { useParams } from 'react-router-dom';

import {
  Loader,
  CastImg,
  CastList,
  CastListItem,
  CastText,
  CastTitle,
  TextContainer,
} from 'components';

import { getMovieCastById } from 'api';
import { useHttp } from 'hooks';

import defaultCastImg from 'assets/images/oscar-award.jpg';

const Cast = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading } = useHttp(getMovieCastById, id);

  if (!actors)
    return (
      <>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
      </>
    );

  return (
    <CastList>
      {actors.map(({ id, profile_path, name, character }) => (
        <CastListItem key={id}>
          <CastImg
            src={`${
              profile_path
                ? `  https://image.tmdb.org/t/p/w342${profile_path}`
                : defaultCastImg
            }`}
            alt={name}
          />
          <TextContainer>
            <CastTitle>{name}</CastTitle>
            <CastText>Character: {character}</CastText>
          </TextContainer>
        </CastListItem>
      ))}
    </CastList>
  );
};
export default Cast;
