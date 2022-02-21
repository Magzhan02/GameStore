import React from 'react';
import { useDispatch } from 'react-redux';

import style from './Auth.module.scss';

import SignUp from '../../components/Login/SignUp/SignUp';
import useAuth from '../../Hooks/useAuth';

import {removeUserAC,setUserNameAC} from '../../redux/reducers/registerReducer'


function Auth() {
  const dispatch = useDispatch();
  const { isAuth, email,name } = useAuth();
  const [userName, setUserName] = React.useState('user');

  const logout = () =>{
    dispatch(removeUserAC())
  }
  const setName = () =>{
    if(userName){
      dispatch(setUserNameAC(userName))
    }
  }
  
  React.useEffect(() => {
    setUserName(name)
  },[dispatch])

  return (
    <>
      {isAuth ? (
        <div className={style.personalD}>
          <h2>ЛИЧНЫЕ ДАННЫЕ</h2>
          <form className={style.data}>
            <div className={style.user}>
              <input 
               type="text"
               autoComplete="off" 
               value={userName} 
               onChange={(e) => setUserName(e.target.value)}/>
              <label>Никнейм</label>
            </div>
            <div className={style.email}>
              <input type="text" autoComplete="off" value={email} disabled="disabled" />
              <label>E-mail</label>
              <div className={style.description}>Является логином и используется для входа</div>
            </div>
          </form>
          <div className={style.btn}>
          <button onClick={setName}>Сохранить</button>
          <button onClick={logout}>Выход</button>
          </div>
        </div>
      ) : (
        <div className={style.auth}>
          <SignUp />
        </div>
      )}
    </>
  );
}

export default Auth;
