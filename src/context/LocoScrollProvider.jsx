import { useState } from "react"
import { LocoScrollContext } from "./LocoScrollContext";




export const LocoScrollProvider = ({ children }) => {

  const [locoScrollInstance, setLocoScrollInstance] = useState(); 

  const setInstance = (val) => {
    setLocoScrollInstance(val);
  }

  return (
    <LocoScrollContext.Provider value= {{ locoScrollInstance, setInstance }}>
      { children }
    </LocoScrollContext.Provider>
  )
}


