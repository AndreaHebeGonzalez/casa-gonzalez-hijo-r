import { Link } from "react-router-dom"

export const Category = ({ category, description, image, link }) => {
  return (
    <div className="categorys__content">
      <img className="categorys__img" src= { image } alt="Imagen de fusil" />
      <div className="categorys__informacion">
        <h3 className="categorys__titulo">{ category }</h3>
        <p className="categorys__texto">{ description }</p>
        <a className="categorys__enlace" href={ link }>Ver modelos</a>
      </div>
    </div>
  )
}
