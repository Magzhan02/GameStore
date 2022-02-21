import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.scss';

import { setUserAC } from '../../../redux/reducers/registerReducer';

import FormLog from '../Form/FormLog';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth();

  const handleAuth = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        const obj = {
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        };
        dispatch(setUserAC(obj));
        navigate('/');
      })
    .catch(console.error)
  };

  return (
    <div className={style.login}>
      <h2>Войти</h2>
      <FormLog title="вход" handleClick={handleAuth} />
    </div>
  );
}

export default Login;
