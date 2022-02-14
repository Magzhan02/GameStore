import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

import style from './Card.module.scss';

function Card({ id, name, imageUrl, price, addItemToCart, addItemToFavor, active }) {
  const [isShow, setIsShow] = React.useState(false);

  const onAddToCart = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    };

    addItemToCart(obj);
  };

  const onAddToFavor = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    };
    addItemToFavor(obj);
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
          <>
            <div className={active ? style.active : style.toCart} onClick={onAddToCart}>
              В КОРЗИНУ
            </div>
            <div className={active ? style.active : style.iconFavorite} onClick={onAddToFavor}>
              <MdFavoriteBorder size={26} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
