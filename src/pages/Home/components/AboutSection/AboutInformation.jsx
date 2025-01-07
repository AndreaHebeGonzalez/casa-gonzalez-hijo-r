import { useContext, useEffect, useRef } from "react";
import { aboutImageAnimation } from "../../../../animations";
import { LocoScrollContext } from "../../../../context";


export const AboutInformation = () => {

  const { startAnimation } = useContext(LocoScrollContext);
  
  const aboutImageRef = useRef(null);

  useEffect(() => {
    if(!startAnimation) return;
    aboutImageAnimation(aboutImageRef.current);   
  }, [startAnimation]);
  

  return (
    <div className="about-s__information">
      <div className="about-s__content">
        <div className="about-s__text" data-scroll data-scroll-speed="1">
          <p>En Casa González e Hijo, nos especializamos en el desarrollo, diseño, fabricación y comercialización de fusiles de precisión de la más alta calidad. Cada componente de nuestros fusiles es fabricado en nuestras instalaciones, utilizando procesos de mecanizado CNC de última generación y software de diseño por computadora. Esta combinación de tecnología avanzada e ingeniería nos permite ofrecer productos que cumplen con los estándares más exigentes de precisión y fiabilidad.</p>
        </div>
        
        <div className="about-s__images">
          <div className="about-s__image" >
            <picture>
              <img ref={ aboutImageRef } src="/img/home/about-image.jpg" alt="imagen fusil" />
            </picture> 
          </div>
        </div>
      </div>
    </div>
  )
}
