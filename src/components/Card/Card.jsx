import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

import style from './Card.module.scss';

function Card({ name, imageUrl, price }) {
  const [isShow, setIsShow] = React.useState(false);
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
            <div className={style.toCart}>В КОРЗИНУ</div>
            <div className={style.iconFavorite}>
              <MdFavoriteBorder size={26} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;