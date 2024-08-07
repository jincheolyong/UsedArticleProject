import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; // 수정된 CSS 파일 import

const Login = ({ setIsLoggedIn, setUser }) => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Login.jsx
  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await axios.post('http://localhost:8787/api/login', {
              userId: userId,
              userPw: userPw
          });

          if (response.data) {
              console.log('로그인 성공:', response.data);

              // 확인: 서버 응답에서 userNo가 올바르게 포함되어 있는지 확인
              console.log('Response userNo:', response.data.userNo);

               sessionStorage.setItem('userNo', response.data.userNO); // 올바른 key 사용
              setIsLoggedIn(true);
              setUser(response.data);
              navigate('/');
          } else {
              setError('아이디 또는 비밀번호가 올바르지 않습니다.');
              navigate('/login');
          }
      } catch (error) {
          console.error('로그인 요청 실패:', error);
          setError('로그인 요청 중 오류가 발생했습니다.');
      }
  };



    return (
        <div className="login-container">

            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <div><h2>로그인</h2></div>
                    <label htmlFor="userId">아이디:</label>
                    <input
                        type="text"
                        id="userId"
                        name="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="userPw">비밀번호:</label>
                    <input
                        type="password"
                        id="userPw"
                        name="userPw"
                        value={userPw}
                        onChange={(e) => setUserPw(e.target.value)}
                    />
                </div>
                <button type="submit">로그인</button>
                            <Link to="/signup" className="signup-link">회원가입</Link>
                            <Link to="/" className="home-link">홈으로 가기</Link>
            </form>

        </div>
    );
};

export default Login;
