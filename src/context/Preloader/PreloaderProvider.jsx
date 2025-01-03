import { useEffect, useState } from "react";
import { PreloaderContext } from "./PreloaderContext";



export const PreloaderProvider = ({ children }) => {

  const [completeBar, setCompleteBar] = useState(false);
  const [start, setStart] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [startAfterHScroll, setStartAfterHScroll] = useState(false);
  

  useEffect(() => {
    if(completeBar) {
      setTimeout(() => {
        setStart(true);
      }, 100);
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
    <PreloaderContext.Provider value= {{ completeBar, setCompleteBar, start, startAnimation, startAfterHScroll, setStartAfterHScroll }}>
      { children }
    </PreloaderContext.Provider>

  )
}
