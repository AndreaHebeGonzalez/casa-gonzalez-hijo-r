import { Category } from "./Category";
import { useContext, useEffect, useRef } from "react";
import { horizontalScrollTitle } from "../../../../animations";
import { PreloaderContext, ScreenContext } from "../../../../context";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


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

  /* Context */
  
  const { startAnimation, setStartAfterHScroll } = useContext(PreloaderContext);
  const { screenPx } = useContext(ScreenContext)

  const categorysWrapperRef = useRef(null);
  const titleWrappRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    if(screenPx < 768) return;
    setTimeout(() => {
      horizontalScrollTitle(categorysWrapperRef.current, titleWrappRef.current);
      setStartAfterHScroll(true);
    }, 500);
  }, [startAnimation]);
  
  return (
    <section className="categorys section">
      <div className="categorys__wrapper" ref={ categorysWrapperRef }>
        <div className="categorys__title-wrapp" ref={ titleWrappRef }>
          <h2 className="categorys__heading">Productos</h2>
        </div>

        <div className="categorys__box container">
          {
            categorysList.map((category) => (
              <Category key={ `${category.category}-${category.id}` } { ...category } titleWrapp = { titleWrappRef.current } />)
            )
          }
        </div>
      </div>      
    </section>
  )
}
