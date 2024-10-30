import { useEffect, useRef, useState } from "react"
import { animationBar, introAnimation, animationPreloader } from "../../animations";

export const Preloader = ({ barComplete }) => {

  const [progress, setProgress] = useState(0);
  const id = useRef(null);

  useEffect(() => {
    id.current = setInterval(() => {
      setProgress(prev => {
        const updatedProgress = prev + Math.floor(Math.random() * 50); 
        return updatedProgress >= 100  ? 100 : updatedProgress;
      });
    }, 500);
    return  () => clearInterval(id.current);
  }, []);


  useEffect(() => {
    animationBar(progress);
    if (progress >= 100) clearInterval(id.current);
    if(progress === 100) {
      animationPreloader();
      introAnimation(barComplete);
    } 
  }, [progress]);

  return (
    <>
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      <div className= "preloader">
        <span className="introName">Casa Gonzalez e Hijo</span>  
        <div className="progress-bar-box">
          <div className="progress-bar"></div>
        </div>
      </div>
  </>
  )
}
