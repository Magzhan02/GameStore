import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useSelect from '../Hooks/useSelect';
import Card from '../components/Card/Card';

import style from './Favorite.module.scss';

function Favorite() {
  const { items, totalCount } = useSelector(({ favorite }) => favorite);

  const selectItems = useSelect(items);

  return (
    <div className={style.favorite}>
      {totalCount ? (
        selectItems.map((items) => <Card key={items.id} {...items} active={true} />)
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
