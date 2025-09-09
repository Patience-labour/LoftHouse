import './Benefits.scss';
import bench from './../../Img/Benefits/bench.svg';
import building from './../../Img/Benefits/building.svg';
import fountain from './../../Img/Benefits/fountain.svg';
import bicycle from './../../Img/Benefits/bicycle.svg';


export const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container container--sm">
        <div className="benefits__row">
          <div className="benefits__item">
            <img src={bench} alt="bench" className="benefits__item-img" />
            <p className="benefits__item-text">Рядом исторические
              парки&nbsp;и&nbsp;скверы</p>
          </div>
          <div className="benefits__item">
            <img src={building} alt="building" className="benefits__item-img" />
            <p className="benefits__item-text">Полностью обустроенный</p>
          </div>
          <div className="benefits__item">
            <img src={fountain} alt="fountain" className="benefits__item-img" />
            <p className="benefits__item-text">10 фонтанов на территории</p>
          </div>
          <div className="benefits__item">
            <img src={bicycle} alt="bicycle" className="benefits__item-img" />
            <p className="benefits__item-text">6 км велодорожек</p>
          </div>
        </div>
      </div>
    </section>
  )
}

