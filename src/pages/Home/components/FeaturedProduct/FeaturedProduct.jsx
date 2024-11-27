import { useRef, useState } from "react"
import { closeHotspost, openHotspost } from "../../../../animations";
import { Hotspots } from "./Hotspots";


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


  const setElements = (hotspot) => {

    const lineOne = hotspot.querySelector(".hotspot__line-one");
    const lineTwo = hotspot.querySelector(".hotspot__line-two");
    const tooltip = hotspot.querySelector(".hotspot__tooltip-wrapp");

    return { lineOne, lineTwo, tooltip };
  }

  const handleHotspot = (id) => {
    const hotspot =  refs.current[id];
    if(prevHotspot) { 
      const { lineOne, lineTwo, tooltip } = setElements(prevHotspot);
      closeHotspost(lineOne, lineTwo, tooltip);
      if(prevHotspot === hotspot) {
        setPrevHotspot(null);
        return;
      };      
    };
    const { lineOne, lineTwo, tooltip } = setElements(hotspot);
    openHotspost(lineOne, lineTwo, tooltip, prevHotspot);
    setPrevHotspot(hotspot);
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
                <Hotspots hotspot = { hotspot } handleHotspot = { handleHotspot } setRef = { setRef } position = "left" />
              )
            }
            {
              hotspotsRight.map(hotspot => 
                <Hotspots hotspot = { hotspot } handleHotspot = { handleHotspot } setRef = { setRef } position = "right" />
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
