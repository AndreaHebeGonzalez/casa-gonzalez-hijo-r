import { useContext, useEffect, useRef, useState } from "react"
import { closeHotspot, featuredProductAnimation, openHotspot } from "../../../../animations";
import { Hotspots } from "./Hotspots";
import { Feature } from "./Feature";
import { LocoScrollContext } from "../../../../context";


export const FeaturedProduct = () => {
  const [prevHotspot, setPrevHotspot] = useState(null);

  /* Contexts */
  const { startAfterHScroll } = useContext(LocoScrollContext);

  /* Refs */
  const refs = useRef({});
  const featuredProductRef = useRef(null);
  const titleProductRef = useRef(null);
  const imageProductRef = useRef(null);
  const infoRef = useRef(null);

  const setRef = (node, id) => {
    if(node) {
      refs.current[id] = node; 
    }
  }

  /* Data */
  const hotspotsLeft = [
    { id: 1, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto.', top: '28%', left: '2%', position: "left" },
    { id: 5, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto.', top: '30%', left: '42%', position: "left" }
    
  ]

  const hotspotsRight = [
    { id: 2, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto.', top: '16%', left: '53%', position: "right" },
    { id: 3, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto.', top: '65%', left: '74%', position: "right" },
    { id: 4, description: 'Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto.', top: '38%', left: '84%', position: "right" },
  ]

  const features = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description: "Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description: "Lorem Ipsumes simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
    }
  ];

  const setElements = (hotspot) => {

    const btnHotspot = hotspot.querySelector(".hotspot__btn-pulse");
    const tooltip = hotspot.querySelector(".hotspot__tooltip-wrapp");

    return { btnHotspot, tooltip };
  }

  const handleHotspot = (id) => {
    const hotspot =  refs.current[id];
    if(prevHotspot) { 
      const { btnHotspot, tooltip } = setElements(prevHotspot);
      closeHotspot(btnHotspot, tooltip);
      if(prevHotspot === hotspot) {
        setPrevHotspot(null);
        return;
      };      
    };
    const { btnHotspot, tooltip } = setElements(hotspot);
    openHotspot(btnHotspot, tooltip, prevHotspot);
    setPrevHotspot(hotspot);
  }
  
  useEffect(() => {
    if(!startAfterHScroll) return;
    featuredProductAnimation(featuredProductRef.current, titleProductRef.current, imageProductRef.current, infoRef.current);
  }, [startAfterHScroll]);
  
  return (
    <section className="featured-product section">
      <div className="featured-product__container">
        <div className="featured-product__wrapp" ref={ featuredProductRef }>
          <div className="featured-product__heading" ref={ titleProductRef }>
            <p className="featured-product__label">Nuevo</p>
            <h2 className="featured-product__title">Modelo MMM</h2>
          </div>
          <div className="featured-product__image" ref={ imageProductRef }>
            <picture className="featured-product__picture">
              <img className="featured-product__img" src="/img/fusiles/FusilMMMInicio.png" alt="Fusil MMM" />
            </picture>
            {
              hotspotsLeft.map(hotspot => 
                <Hotspots hotspot = { hotspot } handleHotspot = { handleHotspot } setRef = { setRef } key = { hotspot.id } />
              )
            }
            {
              hotspotsRight.map(hotspot => 
                <Hotspots hotspot = { hotspot } handleHotspot = { handleHotspot } setRef = { setRef } key = { hotspot.id } />
              )
            }
          </div>
          <div className="featured-product__info" ref={infoRef}>
            <h3 className="featured-product__info-title">Diseño superior</h3>
            <div className="featured-product__info-items">
              {
                features.map(feature => 
                  <Feature key={`${feature.title}-${feature.id}`} { ...feature } />
                )
              }
            </div>   
          </div>
        </div>
      </div>
    </section>
  )
}
