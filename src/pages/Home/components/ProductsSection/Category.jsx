import { Link } from "react-router-dom"

export const Category = ({ category, description, image, link }) => {
  return (
    <div  className="category">
      
      <div className="category__content">
        <img className="category__img" src= { image } alt="Imagen de fusil" />
        <div className="category__information">
          <h3 className="category__title">{ category }</h3>
          <p className="category__text">{ description }</p>
          <a className="category__link" href={ link }>Ver modelos</a>
        </div>
      </div>
      
    </div>
  )
}
