import { useParams } from 'react-router-dom';

import { Loader, ReviewList, ReviewTitle } from 'components';

import { getMovieReviewsById } from 'api';
import { useHttp } from 'hooks';

const Reviews = () => {
  const { id } = useParams();
  const { data: reviews, error, isLoading } = useHttp(getMovieReviewsById, id);

  if (!reviews)
    return (
      <>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
      </>
    );

  return !reviews.length ? (
    <h2>We don`t have any reviews for this movie.</h2>
  ) : (
    <ReviewList>
      {reviews.map(review => (
        <li key={review.id}>
          <ReviewTitle>Author: {review.author}</ReviewTitle>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewList>
  );
};

export default Reviews;
