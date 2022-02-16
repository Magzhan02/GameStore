import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BsSearch, BsCart } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

import style from './Header.module.scss';

function Header({searchInput,search}) {
  const cart = useSelector(({ cart }) => cart);
  const favorite = useSelector(({ favorite }) => favorite);

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <h1>GameStore</h1>
        </Link>
      </div>
      <div className={style.search}>
        <form>
          <input type="text" onChange={searchInput} value={search}/>
          <div className={style.searchBtn}>
            <BsSearch />
          </div>
        </form>
      </div>
      <div className={style.favorite}>
        <div className={style.icon}>
          <Link to="favorite">
            <MdFavoriteBorder size={24} />
            <span>{favorite.totalCount}</span>
          </Link>
        </div>
      </div>
      <div className={style.cart}>
        <div className={style.cartIcon}>
          <Link to="cart">
            <BsCart size={24} />
            <span>{cart.totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
