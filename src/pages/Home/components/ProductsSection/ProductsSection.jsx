import { Category } from "./Category";
import { useContext, useEffect, useRef } from "react";
import { horizontalScroll } from "../../../../animations";

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PreloaderContext } from "../../../../context/PreloaderContext";


gsap.registerPlugin(ScrollTrigger);


const categorysList = [
  {
    id: 1,
    category: "Fusiles",
    image: "/img/fusiles/fusil-portada.jpg",
    link: '#',
  },
  { 
    id: 2,
    category: "Accesorios",
    image: "/img/accesorios/accesorios-portada.jpg",
    link: '#',
  },
  {
    id: 3,
    category: "Componentes",
    image: "/img/componentes/componentes-portada.jpg",
    link: '#',
  },
] 

export const ProductsSection = () => {
  
  const { startAnimation } = useContext(PreloaderContext);

  const categorysBoxRef = useRef(null);
  const categorysRef = useRef(null);
  const titleWrappRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    //horizontalScroll(categorysRef.current, categorysBoxRef.current, titleWrappRef.current);
  }, [startAnimation]);
  
  return (
    <section className="categorys section" ref={ categorysRef }>
      <div className="categorys__wrapper">
        <div className="categorys__box container" ref={ categorysBoxRef }>
          <div className="categorys__title-wrapp" ref={ titleWrappRef }>
            <h2 className="categorys__heading">Productos</h2>
            <div className="categorys__line"></div>
          </div>
          {
            categorysList.map((category) => (
              <Category key={ `${category.category}-${category.id}` } { ...category } />)
            )
          }
        </div>
      </div>      
    </section>
  )
}
