import { useEffect, useState } from "react"
import { LocoScrollContext } from "./LocoScrollContext";




export const LocoScrollProvider = ({ children }) => {

  const [locoScrollInstance, setLocoScrollInstance] = useState(); 
  const [startAnimation, setStartAnimation] = useState(false);
  const [startAfterHScroll, setStartAfterHScroll] = useState(false);

  const setInstance = (val) => {
    setLocoScrollInstance(val);
  }

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 500);
  }, [locoScrollInstance]);
  
  
  return (
    <LocoScrollContext.Provider value= {{ locoScrollInstance, setInstance, startAnimation, startAfterHScroll, setStartAfterHScroll }}>
      { children }
    </LocoScrollContext.Provider>
  )
}


