import { useEffect, useState } from "react";
import { ScreenContext } from "./ScreenContext";



export const ScreenProvider = ({ children }) => {

  const [mobileVersion, setMobileVersion] = useState(window.innerWidth < 1280);
  const [screenPx, setScreenPx] = useState(null);

  useEffect(() => {
    
    const viewVersion = () => {
      setMobileVersion(window.innerWidth < 1280);
      setScreenPx(window.innerWidth);
    };
    
    viewVersion();
    window.addEventListener('resize', viewVersion);

    return () => {
      window.removeEventListener('resize', viewVersion);
    }

  }, []); 

  return (
    <>
      <ScreenContext.Provider value={{ mobileVersion, screenPx }}>
        { children }
      </ScreenContext.Provider>
    </>
  );
};
