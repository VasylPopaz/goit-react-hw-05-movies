import {
  StyledTitle,
  StyledLink,
  AdditionalInfoList,
  AdditionalInfoTitle,
  AdditionalInfowrapper,
  InfoWrapper,
  StyledContainer,
} from 'components';

import defaultPosterImg from 'assets/images/poster.jpeg';

export const MovieInfo = ({ selectedMovie }) => {
  if (!Object.keys(selectedMovie).length) return;

  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = selectedMovie;
  return (
    <>
      <StyledContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : defaultPosterImg
          }
          alt={title || name}
          width={342}
        />

        <InfoWrapper>
          <StyledTitle>
            {title || name} ({release_date.slice(0, 4)})
          </StyledTitle>
          <p>User Score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview || '-------------------'}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => `${genre.name} `)}</p>
        </InfoWrapper>
      </StyledContainer>
      <AdditionalInfowrapper>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <AdditionalInfoList>
          <li>
            <StyledLink to={'cast'}>Cast</StyledLink>
          </li>
          <li>
            <StyledLink to={'reviews'}>Reviews</StyledLink>
          </li>
        </AdditionalInfoList>
      </AdditionalInfowrapper>
    </>
  );
};
