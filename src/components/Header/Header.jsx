import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsCart } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';

import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to="/">
          <h1>GameStore</h1>
        </Link>
      </div>
      <div className={style.search}>
        <form>
          <input type="text" />
          <div className={style.searchBtn}>
            <BsSearch />
          </div>
        </form>
      </div>
      <div className={style.favorite}>
        <div className={style.icon}>
          <MdFavoriteBorder size={24} />
        </div>
      </div>
      <div className={style.cart}>
        <div className={style.cartIcon}>
          <BsCart size={24} />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
