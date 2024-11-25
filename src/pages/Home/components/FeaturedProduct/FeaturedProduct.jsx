export const FeaturedProduct = () => {
  return (
    <section className="featured-product section">
      <div className="featured-product__container">
        <div className="featured-product__wrapp">
          <div className="featured-product__heading">
            <p className="featured-product__label">Nuevo</p>
            <h2 className="featured-product__title">Modelo MMM</h2>
          </div>
          <div className="featured-product__image">
            <picture className="featured-product__picture">
              <img className="featured-product__img" src="/public/img/fusiles/FusilMMMInicio.png" alt="Fusil MMM" />
            </picture>
          </div>
          <div className="featured-product__info">
              <div className="featured-product__info-heading">
                <h3 className="featured-product__info-title">Diseño superior</h3>
              </div>
              <div className="featured-product__info-items">
                <div className="featured-product__info-item">
                  <h4 className="featured-product__item-title">Lorem Ipsum</h4>
                  <p className="featured-product__item-description">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                </div>
                <div className="featured-product__info-item">
                  <h4 className="featured-product__item-title">Lorem Ipsum</h4>
                  <p className="featured-product__item-description">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                </div>
                <div className="featured-product__info-item">
                  <h4 className="featured-product__item-title">Lorem Ipsum</h4>
                  <p className="featured-product__item-description">Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
                </div>
              </div>   
          </div>
        </div>
      </div>
    </section>
  )
}
