import { Link } from "react-router-dom"

export const Category = ({ category, description, image, link }) => {


  return (
    <div  className="category">    
    <div /> 
      <div className="category__content">
        <div className="category__img">
          <picture>
            <img  src= { image } alt="Imagen de fusil" />
          </picture>
        </div>
        
        <div className="category__information">
          <h3 className="category__title">{ category }</h3>
          <div className="category__link-box">
            <p className="category__link-text">Ver productos</p>   
            <a className="category__link" href={ link }>
              <img src="/public/icons/ico-diagonal-arrow-right.svg" alt="Click para ir a categoría" />
            </a>
          </div>         
        </div>     
      </div>
      <div />
    </div>
  )
}
