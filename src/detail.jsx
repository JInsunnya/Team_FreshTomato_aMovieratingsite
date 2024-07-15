import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './detailcss.css';

function Detail() {
  const [movie, setMovie] = useState(null);
  const [posts, setPosts] = useState([]);
  // const [token, setToken] = useState('');
  const { state } = useLocation();
  // const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState(1);
  const [comment, setComment] = useState('');
  // const Tofeed = (postId) => {
  //   navigate(`/modifys`, { state: { id: postId } });
  // };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const apiCall = axios.create({
    baseURL:
      'https://port-0-minihackathon-12-lyec0qpi97716ac6.sel5.cloudtype.app/movie',
  });

  // const handleClick = () => {
  //   navigate(`/modify`);
  // };

  // console.log(token);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);
  // }, []);
  useEffect(() => {
    const detailMovie = async (id) => {
      try {
        const response = await apiCall.get(`/1`);
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log('Error movie data:', error);
      }
    };
    detailMovie(id);
  }, []);

  // useEffect(() => {
  //   if (token) {
  //     list(id, token);
  //   }
  // }, [id, token]);

  return (
    <div>
      ddd
      <div>
        <h1>
          <span className="kortitle">{movie.title_kor}</span>
          <span className="engtitle">{movie.title_eng}</span>
        </h1>
        <div>
          <img
            src={movie.poster_url}
            alt={movie.title_kor}
            className="poster"
          />
          <div className="movie-info">
            <div className="movie-info2">
              <p>관람객 평점</p>
              <p>장르</p>
              <p>상영 시간</p>
              <p>개봉일</p>
            </div>
            <div className="movie-info3">
              <p>{movie.rating}</p>
              <p>{movie.genre}</p>
              <p>{movie.showtime}분</p>
              <p>{movie.release_date} 개봉</p>
            </div>
          </div>
          <p>줄거리</p>
          <p>{movie.plot}</p>
        </div>
      </div>
      <h3 className="top">인물 정보</h3>
      <div className="director">
        <div>
          <img
            src={movie.director_image_url}
            alt={movie.director_name}
            className="directorphoto"
          />
          <h4>감독</h4>
          <h4 className="directorname">{movie.director_name}</h4>
        </div>
        <div className="actors">
          {movie.actors.map((actor, index) => (
            <div key={index} className="actor-item">
              <img src={actor.image_url} alt={actor.name} className="people" />
              <div className="actor-info">
                <h4>{actor.character}</h4>
                <h4 className="directorname">{actor.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="comments">
        <h3>한줄평</h3>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          className="textbox"
        />
        <button className="button" onClick={comment}>
          작성
        </button>
        <div className="commentbox1">
          {movie.comments.map((comment) => (
            <div key={comment.id} className="commentbox2">
              <p>{comment.comment}</p>
              <p>{comment.user.nickname}</p>
              <p>{comment.created_at}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
