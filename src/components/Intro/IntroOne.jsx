import { useEffect } from "react"
import { introAnimation } from "../../animations";

export const IntroOne = () => {

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <>
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>
      <span className="introName">Casa Gonzalez e Hijo</span>
    </>
  )
}
