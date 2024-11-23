import { useContext, useEffect } from "react";
import { useRef } from "react"
import { PreloaderContext } from "../../context/PreloaderContext";
import { marqueeAnimation } from "../../animations";

export const Marquee = () => {

  const { startAnimation } = useContext(PreloaderContext);

  const textRef = useRef(null);
  const textCloneRef = useRef(null);
  const marqueeWrappRef = useRef(null);

  useEffect(() => {
    marqueeAnimation(textRef.current, textCloneRef.current, marqueeWrappRef.current);
  }, [startAnimation]);

  return (
    <section className="marquee section">
      <div className="marquee__wrapp" ref={ marqueeWrappRef }>
        <p className="marquee__text" ref={ textRef }>Potencia y precisión en cada disparo-</p>
        <p className="marquee__text" ref={ textCloneRef }>Potencia y precisión en cada disparo-</p>
      </div>
    </section>
  )
}
