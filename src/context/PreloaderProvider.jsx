import { useEffect, useState } from "react";
import { PreloaderContext } from "./PreloaderContext";



export const PreloaderProvider = ({ children }) => {

  const [completeBar, setCompleteBar] = useState(false);
  const [start, setStart] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  

  useEffect(() => {
    if(completeBar) {
      setTimeout(() => {
        setStart(true);
      }, 500);
    }
  }, [completeBar]);


  useEffect(() => {
    if(start) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 500);
    }
  }, [start]);

  return (
    <PreloaderContext.Provider value= {{ completeBar, setCompleteBar, start, startAnimation }}>
      { children }
    </PreloaderContext.Provider>

  )
}
