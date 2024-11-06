import { BtnLight } from "../../../../components";

export const HeroSection = () => {

  return (
    <section className="hero"> 
      <div className="hero__content container-2">
          <div className="hero__box-heading">
            <span className="hero__subtitle">Nuevo <span>modelo</span></span>
            <h1 className="hero__heading">
              Fusil MMM
            </h1>
            <BtnLight text= 'Ver' pather= 'hero' />
          </div>
      </div>
    </section>
  )
}
 