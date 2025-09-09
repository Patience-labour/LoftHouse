import './Header.scss';
import logo from '../../Img/Icons/logo.svg';
import mouse from '../../Img/Icons/Mouse.svg'
import { useState } from 'react';

export const Header = () => {

  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive(prev => !prev);
  }

  const onChangeHandler = e => {
    e.currentTarget.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
  }

  return (
    <header>
      <div className="header__top">
        <div className="container">
          <div className="header__top-row" onClick={onChangeHandler}>
            <a href="#!">
              <img src={logo} alt="Main logo" />
            </a>
            <div className="header__nav">
              <nav>
                <ul className="nav__list">
                  <li><a href="#!">О комплексе</a></li>
                  <li><a href="#!">Район</a></li>
                  <li><a href="#!">Каталог квартир</a></li>
                  <li><a href="#!">Ипотека</a></li>
                  <li><a href="#!">Контакты</a></li>
                </ul>
              </nav>
            </div>
            <div className="header__nav-btn">
              <button className="nav-icon-btn" onClick={onClickHandler}>
                <div className={`nav-icon ${isActive ? "nav-icon--active" : ""}`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="header__title">Жилой комплекс<br />в историческом центре
          <a href="#benefits">
            <img src={mouse} alt="Scroll next" className="header__title-item" />
          </a>
        </h1>
      </div>

      <div className="header__footer">
        <div className="text-right">
          <a href="#section-map" className="info">Наб. реки Фонтанки 10-15</a>
        </div>
        <a href="tel:+78121234567" className="info info--tel">8 (812) 123-45-67</a>
      </div>

    </header>
  )
}