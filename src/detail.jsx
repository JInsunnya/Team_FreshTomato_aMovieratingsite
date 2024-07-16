import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './detailcss.css';

function Detail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState({});
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const apiCall = axios.create({
    baseURL: 'https://freshtomato.store/',
  });

  useEffect(() => {
    const detailMovie = async () => {
      try {
        const response = await apiCall.get(`/Movie/movie_detail/${id}/`);
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log('Error movie', error);
      }
    };
    detailMovie();
  }, [id]);

  const commentPost = async () => {
    console.log({ token });
    try {
      const storedToken = localStorage.getItem('access');
      console.log(storedToken);
      if (!storedToken) {
        console.log('저장된 토큰 없음.');
        alert("로그인이 필요합니다.")
        navigate(`/Login`, {replace: true})
        return;
      }

      const response = await apiCall.post(
        `/Movie/movie_detail/${id}/comment/`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
          withCredentials: true,
        }
      );
      console.log('댓글 달기', response.data);

      const newComment = {
        id: response.data.id,
        comment: response.data.comment,
        nickname: response.data.nickname,
        content: response.data.content,
      };

      setMovie((prevMovie) => ({
        ...prevMovie,
        comments: [...prevMovie.comments, response.data],
      }));
      setPosts(response.data);
      setComment('');
    } catch (error) {
      console.log('Error comment:', error);
    }
  };

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('token');
  //   setToken(storedToken);
  // }, []);
  useEffect(() => {
    const storedToken = localStorage.getItem('access');
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.log('토큰 없음');
    }
  }, []);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  if (!movie) {
    return <div>Loading</div>;
  }

  return (
    <div>
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
          <p className="movie-info4">줄거리</p>
          <p className="plot">{movie.plot}</p>
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
        <h3 className="commenttitle">한줄평</h3>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          className="textbox"
        />
        <button className="button" onClick={commentPost}>
          작성
        </button>
        <div className="commentbox1">
          {movie.comments.map((comment) => (
            <div key={comment.id} className="commentbox2">
              <p>{comment.comment}</p>
              <p>{comment.nickname}</p>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
