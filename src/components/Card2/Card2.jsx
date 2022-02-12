import React from 'react';
import { BsX } from 'react-icons/bs';

import style from './Card2.module.scss'

function Cart({name,price,imageUrl,id,removeItem}) {

  const onRemove = () => {
    removeItem(id);
  };
  return (
    <div className={style.card}>
      <div className={style.img}>
        <img width={125} height={155} src={imageUrl} alt="game poster" />
      </div>
      <div className={style.desc}>
        <h2 className={style.name}>{name}</h2>
        <div className={style.price}>{price} &#8376;</div>
      </div>
      <div className={style.icon} onClick={onRemove}>
        <BsX size={50} />
      </div>
    </div>
  );
}

export default Cart;
