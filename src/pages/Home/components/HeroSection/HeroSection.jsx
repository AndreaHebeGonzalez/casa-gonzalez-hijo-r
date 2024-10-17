import { BtnPulse } from "../../../../components/Buttons/BtnPulse"


export const HeroSection = () => {
  return (
    <section className="hero"> 
      <div className="hero__content container-2">
          <div className="hero__box-heading">
            <div className="hero__box-btn-pulse">
              <BtnPulse />
              <img className="hero__icon-btn-pulse" src="/public/icons/game-icons--click.svg" alt="hacer click" /> 
            </div>
            <h1 className="hero__heading">
              {/* <span><span>Nuevo</span> modelo</span> */}
              Fusil MMM
            </h1>
          </div>
      </div>
    </section>
  )
}
