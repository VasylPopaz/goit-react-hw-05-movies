import { useLocation } from 'react-router-dom';

import {
  StyledDescr,
  StyledLinkMoviesList,
  StyledList,
  StyledListItem,
} from 'components';

import defaultPosterImg from 'assets/images/poster.jpeg';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) return;

  return (
    <StyledList>
      {movies.map(movie => (
        <StyledListItem key={movie.id}>
          <StyledLinkMoviesList
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                  : defaultPosterImg
              }
              alt=""
            />

            <StyledDescr>
              {movie.title
                ? `${movie.title}  (${
                    movie.release_date.slice(0, 4) ||
                    movie.first_air_date?.slice(0, 4)
                  }) `
                : ` ${movie.name}  (${
                    movie.release_date?.slice(0, 4) ||
                    movie.first_air_date?.slice(0, 4)
                  })`}
            </StyledDescr>
          </StyledLinkMoviesList>
        </StyledListItem>
      ))}
    </StyledList>
  );
};
