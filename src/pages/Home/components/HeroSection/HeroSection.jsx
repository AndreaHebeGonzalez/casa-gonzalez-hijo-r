import { useEffect, useRef } from "react";
import { BtnPulse, BtnLight } from "../../../../components";
import { heroAnimation } from "../../../../animations";



export const HeroSection = () => {

  const heroTextRef = useRef(null);
  const HeroBtnPulseRef = useRef(null);

  useEffect(() => {
    heroAnimation(heroTextRef.current, HeroBtnPulseRef.current);

  }, [])
  
  return (
    <section className="hero"> 
      <div className="hero__content container-2">
          <div className="hero__box-heading">
            <div className="hero__box-btn-pulse" ref= { HeroBtnPulseRef }>
              {/* <BtnPulse /> */}
            </div>
            <span className="hero__subtitle">Nuevo <span>modelo</span></span>
            <h1 className="hero__heading" ref={ heroTextRef }>
              Fusil MMM
            </h1>
            <BtnLight text= 'Ver' pather= 'hero' />
          </div>
      </div>
    </section>
  )
}
