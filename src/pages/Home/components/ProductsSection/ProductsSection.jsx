import { Category } from "./Category";
import { useContext, useEffect, useRef } from "react";
import { horizontalScroll } from "../../../../animations";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PreloaderContext } from "../../../../context/PreloaderContext";


gsap.registerPlugin(ScrollTrigger);


const categorysList = [
  {
    category: "Fusiles",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/fusiles/fusil-portada.jpg",
    link: '#',
  },
  {
    category: "Accesorios",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/accesorios/accesorios-portada.jpg",
    link: '#',
  },
  {
    category: "Componentes",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/componentes/componentes-portada.jpg",
    link: '#',
  },
] 

export const ProductsSection = () => {
  
  const { startAnimation } = useContext(PreloaderContext);

  const categorysBoxRef = useRef(null);
  const categorysRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    horizontalScroll(categorysRef.current, categorysBoxRef.current);
  }, [startAnimation]);
  
  return (
    <section className="categorys section container" ref={ categorysRef }>
      <div className="categorys__box" ref={ categorysBoxRef }>
        
        {/* <div className="categorys__slide-1">
          <h2 className="categorys__heading"><span>Nuestros </span> productos</h2>
        </div> */}
        
        {
          categorysList.map((item, i) => (
            <Category key= { `${item.category}-${i}` } { ...item } />
          ))
        }
      </div>
    </section>
  )
}
