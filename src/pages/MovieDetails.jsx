import { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { BackLink, Loader, StyledTitle, MovieInfo } from 'components';

import { getMovieDetailsById } from 'api';
import { useHttp } from 'hooks';

const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: selectedMovie,
    error,
    isLoading,
  } = useHttp(getMovieDetailsById, id);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  if (!selectedMovie)
    return (
      <>
        {isLoading && <Loader />}
        {error && <StyledTitle>{error}</StyledTitle>}
      </>
    );

  return (
    <div>
      <BackLink to={backLinkHref.current}></BackLink>
      <MovieInfo selectedMovie={selectedMovie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
