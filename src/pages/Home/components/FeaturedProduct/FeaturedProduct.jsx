import { useRef, useState } from "react"
import { closeHotspost, openHotspost } from "../../../../animations";


export const FeaturedProduct = () => {
  const [prevHotspot, setPrevHotspot] = useState(null);

  const refs = useRef({});

  const setRef = (node, id) => {
    console.log(node);
    if(node) {
      refs.current[id] = node; 
    }
  }


  const hotspotsLeft = [
    { id: 1, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno ', top: '28%', left: '2%' },
  ]

  const hotspotsRight = [
    { id: 2, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno ', top: '50%', left: '60%' },
  ]


  const handleHotspot = (id) => {
    const hotspot =  refs.current[id];
    if(prevHotspot) {   
      const lineOne = prevHotspot.querySelector(".hotspot__line-one");
      const lineTwo = prevHotspot.querySelector(".hotspot__line-two");
      const tooltip = prevHotspot.querySelector(".hotspot__tooltip-wrapp");
      closeHotspost(lineOne, lineTwo, tooltip);
      if(prevHotspot === hotspot) {
        setPrevHotspot(null);
        return;
      };      
    };
    const lineOne = hotspot.querySelector(".hotspot__line-one");
    const lineTwo = hotspot.querySelector(".hotspot__line-two");
    const tooltip = hotspot.querySelector(".hotspot__tooltip-wrapp");
    openHotspost(lineOne, lineTwo, tooltip);
    setPrevHotspot(hotspot)
  }
  
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
            {
              hotspotsLeft.map(hotspot => 
                (<div ref={ (node) => setRef(node, hotspot.id) }  className="hotspot" style={{ top: hotspot.top, left: hotspot.left }} key={ hotspot.id }>
                  <div className="hotspot__wrapp">
                    <button className="hotspot__btn-pulse" onClick={ () => handleHotspot(hotspot.id) }></button>
                    <div className="hotspot__line-one"></div>
                    <div className="hotspot__line-two"></div>
                    <div className="hotspot__tooltip-wrapp">
                      <div className="hotspot__tooltip">
                        <div className="hotspot__tooltip-text">
                          <p>{ hotspot.description }</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              )
            }
            {
              hotspotsRight.map(hotspot => 
                (<div ref={ (node) => setRef(node, hotspot.id) } className="hotspot" style={{ top: hotspot.top, left: hotspot.left }} key={ hotspot.id }>
                  <div className="hotspot__wrapp">
                    <button className="hotspot__btn-pulse" onClick={ () => handleHotspot(hotspot.id) }></button>
                    <div className="hotspot__line-one hotspot__line-one--right"></div>
                    <div className="hotspot__line-two hotspot__line-two--right"></div>
                    <div className="hotspot__tooltip-wrapp hotspot__tooltip-wrapp--right">
                      <div className="hotspot__tooltip">
                        <div className="hotspot__tooltip-text">
                          <p>{ hotspot.description }</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>)
              )
            }
            
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
