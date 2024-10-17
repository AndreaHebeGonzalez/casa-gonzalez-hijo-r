import { BtnLight } from "../../../../components/Buttons/BtnLight"


export const AboutInformation = () => {
  return (
    <div className="about-s__information">
      <h2 className="about-s__heading"><span>Sobre</span> Nosotros</h2>
      <div className="about-s__content">
        <p className="about-s__text">En Casa González e Hijo, nos especializamos en el desarrollo, diseño, fabricación y comercialización de fusiles de precisión de la más alta calidad. Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora de vanguardia. Esta combinación de tecnología avanzada y dedicación a la excelencia nos permite ofrecer productos que cumplen con los estándares más exigentes de precisión y fiabilidad.</p>
        <BtnLight text={ 'Leer más' } pather={ 'about-s' }/>
      </div>
    </div>
  )
}
