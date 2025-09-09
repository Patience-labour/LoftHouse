import './Appartmens.scss';
import apart1 from './../../Img/Aparts/01.jpg';
import apart2 from './../../Img/Aparts/02.png';
import apart3 from './../../Img/Aparts/03.png';
import apart4 from './../../Img/Aparts/04.png';


export const Appartmens = () => {
  return (
    <section className="appartmens">
      <div className="container">
        <div className="apparments__title">
          <h2 className="title-2">Наши квартиры</h2>
        </div>
        <div className="appartmens__cards">
          <a href="#!" className="card">
            <img src={apart1} alt="Пентхаус Loft Олимп" className="card__img" />
            <h3 className="card__title">Пентхаус "Loft Олимп"</h3>
          </a>
          <a href="#!" className="card">
            <img src={apart2} alt="Апартаменты Nice Loft" className="card__img" />
            <h3 className="card__title">Апартаменты "Nice Loft"</h3>
          </a>
          <a href="#!" className="card">
            <img src={apart3} alt="Аппартаменты Lost Studio" className="card__img" />
            <h3 className="card__title">Апартаменты "Loft Studio"</h3>
          </a>
          <a href="#!" className="card">
            <img src={apart4} alt="Loft квартира Престиж" className="card__img" />
            <h3 className="card__title">Loft квартира "Престиж"</h3>
          </a>
        </div>
      </div>
    </section>
  )
}