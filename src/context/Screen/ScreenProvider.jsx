import { useContext, useEffect, useState } from "react";
import { ScreenContext } from "./ScreenContext";
import { LocoScrollContext } from "../LocoScroll";



export const ScreenProvider = ({ children }) => {

  const [mobileVersion, setMobileVersion] = useState(window.innerWidth < 1280);
  const [screenPx, setScreenPx] = useState(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
  const { startAnimation } = useContext(LocoScrollContext);

  useEffect(() => {
    if (!startAnimation) return;
    
    const viewVersion = () => {
      setMobileVersion(window.innerWidth < 1280);
      setScreenPx(window.innerWidth);
    };

    viewVersion();

    window.addEventListener('resize', viewVersion);

    return () => {
      window.removeEventListener('resize', viewVersion);
    }
  }, [startAnimation]); 

  return (
    <>
      <ScreenContext.Provider value={{ mobileVersion, screenPx }}>
        { children }
      </ScreenContext.Provider>
    </>
  );
};
