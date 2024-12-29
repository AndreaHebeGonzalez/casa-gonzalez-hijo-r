import { useEffect, useState } from "react";
import { PreloaderContext } from "./PreloaderContext";



export const PreloaderProvider = ({ children }) => {

  const [completeBar, setCompleteBar] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if(completeBar) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 500);
    }
  }, [completeBar]);
  

  return (
    <PreloaderContext.Provider value= {{ completeBar, setCompleteBar, startAnimation }}>
      { children }
    </PreloaderContext.Provider>

  )
}
