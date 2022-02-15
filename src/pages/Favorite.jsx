import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './Favorite.module.scss';

import { removeFromFavorAC } from '../redux/reducers/favoriteReducer';

import useSelect from '../Hooks/useSelect';
import Card from '../components/Card/Card';

function Favorite() {
  const dispatch = useDispatch();
  const { items, totalCount } = useSelector(({ favorite }) => favorite);

  const selectItems = useSelect(items);

  const removeItem = (id) => {
    dispatch(removeFromFavorAC(id));
  };

  return (
    <div className={style.favorite}>
      {totalCount ? (
        selectItems.map((items) => <Card key={items.id} removeItem={removeItem} active={true} {...items} />)
      ) : (
        <div className={style.empty}>
          <h2>В ВАШЕМ ИЗБРАННОМ ПОКА ПУСТО :(</h2>
          <Link to="/">
            <div className={style.btn}>ПЕРЕЙТИ В КАТАЛОГ</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorite;
