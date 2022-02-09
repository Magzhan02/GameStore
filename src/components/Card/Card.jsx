import React from 'react';

import style from './Card.module.scss';

function Card({ name, imageUrl, price }) {
  console.log(name);
  return (
    <div className={style.card}>
      <img width={248} height={310} src={imageUrl} alt="img" />
      <div className={style.name}>{name}</div>
      <div className={style.price}>{price} &#8376;</div>
    </div>
  );
}

export default Card;
