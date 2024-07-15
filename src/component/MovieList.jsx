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
        const movieData = response.data;

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

  // 영화 데이터를 5개씩 묶어서 행(row)으로 만들기
  const moviesInRows = [];
  for (let i = 0; i < movies.length; i += 5) {
    const row = movies.slice(i, i + 5);
    moviesInRows.push(row);
  }

  return (
    <div>
      <h1>Movie List</h1>
      {moviesInRows.map((row, index) => (
        <ul key={index} style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
          {row.map(movie => (
            <li key={movie.id} style={{ margin: '0.5rem' }}>
              <h2>{movie.title_kor}</h2>
              <img src={movie.poster_url} alt={movie.title_kor} style={{ maxWidth: '70%' }} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default MovieList;
