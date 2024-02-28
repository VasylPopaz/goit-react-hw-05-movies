import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFkMmU5ZjMxNGU2NjFiZDIyYTBkYTlkM2RkMTZhMSIsInN1YiI6IjY1YTZiYThkZjVmMWM1MDEyZTAxYTg5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OmK2SrodN0tyeAQp5u8bUU8i7ZgLSD7Q22wGwQrO2YU',
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('trending/all/day');
  return data.results;
};

export const getMovieByQuery = async query => {
  const response = await instance.get(
    `search/movie?query=${query}&include_adult=false`
  );
  const { data } = response;
  return data.results;
};

export const getMovieDetailsById = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const getMovieCastById = async id => {
  const response = await instance.get(`movie/${id}/credits`);
  const { data } = response;
  return data.cast;
};

export const getMovieReviewsById = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data.results;
};
