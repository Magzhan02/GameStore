import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsX } from 'react-icons/bs';

import style from './Card.module.scss';

function Card({ id, name, imageUrl, price, addItemToCart, addItemToFavor, active, removeItem }) {
  const [isShow, setIsShow] = React.useState(false);
  
  const obj = {
    id,
    name,
    imageUrl,
    price,
  };

  return (
    <div
      className={style.wrapper}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}>
      <div className={style.card}>
        <img width={248} height={310} src={imageUrl} alt="img" />
        <div className={style.name}>{name}</div>
        <div className={style.price}>{price} &#8376;</div>
        {isShow && (
          <div className={active ? style.active : style.btn}>
            <div className={style.toCart} onClick={() => addItemToCart(obj)}>
              В КОРЗИНУ
            </div>
            <div className={style.iconFavorite}>
              {active ? (
                <BsX size={36} onClick={() => removeItem(id)} />
              ) : (
                <MdFavoriteBorder size={26} onClick={() => addItemToFavor(obj)} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
