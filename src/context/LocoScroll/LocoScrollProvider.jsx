import { useEffect, useState } from "react"
import { LocoScrollContext } from "./LocoScrollContext";




export const LocoScrollProvider = ({ children }) => {

  const [locoScrollInstance, setLocoScrollInstance] = useState(); 
  const [startAnimation, setStartAnimation] = useState(false);


  const setInstance = (val) => {
    setLocoScrollInstance(val);
  }

  useEffect(() => {
    setStartAnimation(true);
  }, [locoScrollInstance]);

  useEffect(() => {
    console.log(startAnimation);
  }, [startAnimation])
  
  
  return (
    <LocoScrollContext.Provider value= {{ locoScrollInstance, setInstance, startAnimation }}>
      { children }
    </LocoScrollContext.Provider>
  )
}


