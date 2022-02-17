import React from 'react';

import style from './Sort.module.scss';

function Sort() {
  const [toggle, setToggle] = React.useState(false);
  const [selected, setSelected] = React.useState('По цене');
  const sortRef = React.useRef();

  const toggleSet = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const setActive = (e) => {
    setSelected(e.target.textContent);
    toggleSet();
  };

  const outSideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setToggle(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', outSideClick);
  }, []);

  return (
    <div className={style.sort} ref={sortRef}>
      <h1>ЛИДЕРЫ ПРОДАЖ</h1>
      <div className={toggle ? style.open : style.popup} onClick={toggleSet}>
        <span className={style.current}>{selected}</span>
        <img width={10} height={10} src="./assets/down-arrow.png" alt="arrow" className={ toggle ? style.arrowUp : style.arrow}/>
        <ul className={style.list} onClick={(e) => setActive(e)}>
          <li data-value="0" className="option">
            По цене
          </li>
          <li data-value="1" className="option">
            По алфавиту
          </li>
          <li data-value="2" className="option">
            По популярности
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
