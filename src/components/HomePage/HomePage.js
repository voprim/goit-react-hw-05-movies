import { useEffect, useState } from 'react';

import { getMovies } from 'services/movies-api';
import { Container } from 'components/Container/Container';
import { PageHeading } from 'components/Pageheading/Pageheading';
import { MovieList } from 'components/MoviesList/MoviesList';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Container>
        <PageHeading text={'Trending Today'}></PageHeading>
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
      </Container>
    </>
  );
}
