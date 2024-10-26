import { useEffect } from "react"
import { introAnimation } from "../../animations";

export const IntroOne = () => {

  useEffect(() => {
    introAnimation();
  }, []);

  return (
    <>
      <div class="overlay first"></div>
      <div class="overlay second"></div>
      <div class="overlay third"></div>
      {/* <span className="introName">Casa Gonzalez e Hijo</span> */}
    </>
  )
}
