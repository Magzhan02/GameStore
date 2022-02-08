import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import style from './Home.module.scss';
import Sort from '../components/Sort/Sort';

function Home() {
  React.useEffect(async () => {
    const { data } = await axios.get('http://localhost:3001/items');
    console.log(data);
  }, []);

  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.content}>
          <Link to="/">Главная</Link>
        </div>
       <Sort/>
      </div>
      <div className={style.catalog}>
      </div>
    </div>
  );
}

export default Home;
