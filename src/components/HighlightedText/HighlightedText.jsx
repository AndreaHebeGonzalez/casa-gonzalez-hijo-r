import { BlancoDeTiro } from "../SvgComponents/BlancoDeTiro"



export const HighlightedText = () => {
  return (
    <section className="highlighted-text">

      <div className="highlighted-text__wrapp">
        <div className="highlighted-text__line"></div>
        <div className="highlighted-text__bg-image">
          <BlancoDeTiro />
        </div>
        <p className="highlighted-text__text">Nuestros fusiles de precisión están diseñados para superar los estándares más exigentes, tanto en el deporte de Benchrest como en las operaciones tácticas de fuerzas de seguridad.</p>
      </div>
    </section>
  )
}
