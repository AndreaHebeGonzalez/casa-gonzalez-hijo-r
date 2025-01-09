import { useEffect, useState } from "react"
import { LocoScrollContext } from "./LocoScrollContext";




export const LocoScrollProvider = ({ children }) => {

  const [locoScrollInstance, setLocoScrollInstance] = useState(null); 
  const [startAnimation, setStartAnimation] = useState(false);
  const [startAfterHScroll, setStartAfterHScroll] = useState(false); //Provisorio

  const setInstance = (val) => {
    setLocoScrollInstance(val);
  }

  useEffect(() => {
    if(!locoScrollInstance) return;
    console.log(locoScrollInstance);
      setStartAnimation(true);
  }, [locoScrollInstance]);
  
  return (
    <LocoScrollContext.Provider value= {{ locoScrollInstance, setInstance, startAnimation, startAfterHScroll, setStartAfterHScroll }}>
      { children }
    </LocoScrollContext.Provider>
  )
}


