import React from 'react';

import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import FormLog from '../Form/FormLog';
import Login from '../Login/Login';

import style from './SignUp.module.scss';

import { setUserAC } from '../../../redux/reducers/registerReducer';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alreadyReg, setAlreadyRegistered] = React.useState(false);

  const handleReg = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
    <div>
      {alreadyReg ? (
        <Login />
      ) : (
        <div className={style.form}>
          <h2>регистрация</h2>
          <FormLog title="зарегистрироваться" handleClick={handleReg} />
          <div
           onClick={() => setAlreadyRegistered(true)}
           className={style.alreadyReg}>
             Уже зарегистрированы?
             <span>Войдите</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
