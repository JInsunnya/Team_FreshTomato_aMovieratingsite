import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie/list');
        // API에서 가져온 영화 데이터를 변수에 저장
        let movieData = response.data;

        // 처음 10개의 영화 데이터만 추출
        movieData = movieData.slice(0, 10);

        setMovies(movieData); // 전체 영화 데이터를 설정
        setLoading(false);
      } catch (error) {
        console.error("에러 발생:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div>
      
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {movies.map(movie => (
          <li key={movie.id} style={{ margin: '0.5rem' }}>
            <h2>{movie.title_kor}</h2>
            <img src={movie.poster_url} alt={movie.title_kor} style={{ maxWidth: '100%' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;