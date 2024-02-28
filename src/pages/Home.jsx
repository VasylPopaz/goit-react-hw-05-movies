import { MoviesList, Loader, StyledTitle } from 'components';

import { getTrendMovies } from 'api';
import { useHttp } from 'hooks';

const Home = () => {
  const { data: movies, error, isLoading } = useHttp(getTrendMovies);
  if (!movies)
    return (
      <>
        {isLoading && <Loader />}
        {error && <StyledTitle>{error}</StyledTitle>}
      </>
    );

  return (
    <div>
      <StyledTitle>Trending today</StyledTitle>
      {isLoading ? <Loader /> : null}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
