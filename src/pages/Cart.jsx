import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


import style from './Cart.module.scss';

import useSelect from '../Hooks/useSelect';
import Card2 from '../components/Card2/Card2';

import { removeItemAC } from '../redux/reducers/cartReducer';

function Cart({search}) {
  const dispatch = useDispatch();

  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const selectItems = useSelect(items);

  const removeItem = (id) => {
    dispatch(removeItemAC(id));
  };

  return (
    <div className={style.cart}>
      
      {totalCount ? (
        <>
        <div className={style.header}>
        <h1>
          МОЙ ЗАКАЗ
          <span>{totalCount}</span>
        </h1>
      </div>
        <div className={style.main}>
          <div className={style.card}>
            {selectItems
            .filter((items) => items.name.toLowerCase().includes(search.toLowerCase()))
            .map((items) => (
              <Card2 key={items.id} removeItem={removeItem} {...items} />
            ))}
          </div>
          <div className={style.total}>
            <h2>ИТОГ</h2>
            <div className={style.totalPrice}>{totalPrice} &#8376;</div>
          </div>
        </div>
        </>
      ) : (
        <div className={style.empty}>
          <h2>В ВАШЕЙ КОРЗИНЕ ЕЩЕ НИЧЕГО НЕТ :(</h2>
          <Link to="/">
          <div className={style.btn}>
            ПЕРЕЙТИ В КАТАЛОГ
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
