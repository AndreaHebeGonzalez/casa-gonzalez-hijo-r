import { useEffect, useState } from "react";
import { PreloaderContext } from "./PreloaderContext";



export const PreloaderProvider = ({ children }) => {

  const [completeBar, setCompleteBar] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if(completeBar) {
      setTimeout(() => {
        setStart(true);
      }, 500);
    }
  }, []);

  return (
    <PreloaderContext.Provider value= {{ completeBar, setCompleteBar, start }}>
      { children }
    </PreloaderContext.Provider>

  )
}
