import React from 'react';

import style from './FormLog.module.scss';

function FormLog({ title, handleClick }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className={style.wrapp}>
      <div className={style.email}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>E-mail</label>
      </div>
      <div className={style.pass}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>Пароль</label>
      </div>
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
}

export default FormLog;
