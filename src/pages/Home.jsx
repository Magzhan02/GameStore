import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";

import style from './Home.module.scss';

import {fetchItems} from '../redux/reducers/itemsReducer';
import Sort from '../components/Sort/Sort';
import Card from '../components/Card/Card';

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ items }) => items);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.content}>
          <Link to="/">Главная</Link>
        </div>
        <Sort />
      </div>
      <div className={style.catalog}>
        {items.length > 0 && items.map((items) => <Card key={items.id} {...items} />)}
      </div>
    </div>
  );
}

export default Home;
