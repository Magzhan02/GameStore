import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from './Home.module.scss';

import { fetchItems } from '../../redux/reducers/itemsReducer';
import { setToCartAC } from '../../redux/reducers/cartReducer';
import { setToFavorAC } from '../../redux/reducers/favoriteReducer';
import { setFilterAC } from '../../redux/reducers/filterReducer';

import Sort from '../../components/Sort/Sort';
import Card from '../../components/Card/Card';

const sortItem = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home({ search }) {
  const dispatch = useDispatch();
  const { items } = useSelector(({ items }) => items);
  const { sortBy } = useSelector(({filter}) => filter)

  React.useEffect(() => {
    dispatch(fetchItems(sortBy));
  }, [sortBy]);

  const selectType = (obj) =>{
    dispatch(setFilterAC(obj))
  }

  const addItemToCart = (obj) => {
    dispatch(setToCartAC(obj));
  };

  const addItemToFavor = (obj) => {
    dispatch(setToFavorAC(obj));
  };

  return (
    <div className={style.home}>
      <div className={style.header}>
        <div className={style.content}>
          <Link to="/">Главная</Link>
        </div>
        <Sort sortBy={sortItem} selectType={selectType} />
      </div>
      <div className={style.catalog}>
        {items.length > 0 &&
          items
            .filter((items) => items.name.toLowerCase().includes(search.toLowerCase()))
            .map((items) => (
              <Card
                key={items.id}
                addItemToCart={addItemToCart}
                addItemToFavor={addItemToFavor}
                {...items}
              />
            ))}
      </div>
    </div>
  );
}

export default Home;
