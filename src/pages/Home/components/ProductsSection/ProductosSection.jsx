
import { Category } from "./Category"

const categorysList = [
  {
    category: "Fusiles",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/fusiles/fusil-1.webp",
    link: '#',
  },
  {
    category: "Accesorios",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/accesorios/accesorios-1.webp",
    link: '#',
  },
  {
    category: "Componentes del Fusil",
    description: "Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora",
    image: "/public/img/componentes/componentes-1.webp",
    link: '#',
  },
] 

export const ProductsSection = () => {
  return (
    <section className="categorys section container">

      <div className="categorys__slide-1">
        <h2 className="categorys__heading"><span>Nuestros</span> productos</h2>
      </div>
      
      {
        categorysList.map((item, i) => (
          <Category key= { `${item.category}-${i}` } { ...item } />
        ))
      }

    </section>
  )
}
