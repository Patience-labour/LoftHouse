import './Map.scss';

export const Map = () => {
  return (
    <section className="section-map">
      <div className="container">
        <div className="section-map__title">
          <h2 className="title-2">Район на карте</h2>
        </div>
        <div className="section-map__map"></div>
      </div>
    </section>
  )
}