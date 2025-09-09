import './Footer.scss';
import logo from './../../Img/Icons/logo.svg';
import youtube from './../../Img/Socials/youtube.svg';
import vk from './../../Img/Socials/vk.svg';
import facebook from './../../Img/Socials/facebook.svg';
import instagram from './../../Img/Socials/instagram.svg';

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <a href="#!">
              <img src={logo} alt="Main logo" />
            </a>
          </div>
          <div className="footer__nav">
            <nav>
              <ul className="footer__nav-list">
                <li><a href="">О комплексе</a></li>
                <li><a href="">Район</a></li>
                <li><a href="">Каталог квартир</a></li>
                <li><a href="">Ипотека</a></li>
                <li><a href="">Контакты</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer__nav">
            <nav>
              <ul className="footer__nav-list">
                <li><a href="">Поселение и переезд</a></li>
                <li><a href="">Сервисные услуги</a></li>
                <li><a href="">Экологическая устойчивость</a></li>
                <li><a href="">Инвестиционные возможности</a></li>
                <li><a href="">Программа лояльности </a></li>
              </ul>
            </nav>
          </div>
          <div className="footer__address">
            <ul className="footer-nav__list">
              <li>Адрес: Наб. реки Фонтанки 10-15</li>
              <li><a href="tel:+78121234567">Телефон: 8 (812) 123-45-67</a></li>
              <li>Отдел продаж: 10:00 - 20:00</li>
              <li>E-mail: <a className="link-bold" href="mailto:vip@lofthouse.ru">vip@lofthouse.ru</a></li>
            </ul>
            <ul className="socials">
              <li><a href="#!"><img src={youtube} alt="youtube" /></a></li>
              <li><a href="#!"><img src={vk} alt="vk" /></a></li>
              <li><a href="#!"><img src={facebook} alt="facebook" /></a></li>
              <li><a href="#!"><img src={instagram} alt="instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}