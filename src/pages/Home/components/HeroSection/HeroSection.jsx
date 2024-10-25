import { useEffect } from "react"
import { BtnPulse } from "../../../../components/Buttons/BtnPulse"
import { textAnimation } from "../../../../helpers/textAnimation"
import { useRef } from "react"


export const HeroSection = () => {

  const heroTextRef = useRef(null);

  useEffect(() => {
    textAnimation(heroTextRef.current);

  }, [])
  
  return (
    <section className="hero"> 
      <div className="hero__content container-2">
          <div className="hero__box-heading">
            <div className="hero__box-btn-pulse">
              <BtnPulse />
              {/* <img className="hero__icon-btn-pulse" src="/public/icons/game-icons--click.svg" alt="hacer click" />  */}
            </div>
            <span className="hero__subtitle">Nuevo <span>modelo</span></span>
            <h1 className="hero__heading" ref={ heroTextRef }>
              Fusil MMM
            </h1>
          </div>
      </div>
    </section>
  )
}
