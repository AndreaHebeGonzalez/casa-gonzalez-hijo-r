import { useEffect, useState } from "react";
import { ScreenContext } from "./ScreenContext";



export const ScreenProvider = ({ children }) => {

  const [mobileVersion, setMobileVersion] = useState(window.innerWidth < 1280);

  useEffect(() => {

    const viewVersion = () => {
      setMobileVersion(window.innerWidth < 1280)
    };
    window.addEventListener('resize', viewVersion);

    return () => {
      window.removeEventListener('resize', viewVersion);
    }

  }, []); 

  return (
    <>
      <ScreenContext.Provider value={{ mobileVersion }}>
        { children }
      </ScreenContext.Provider>
    </>
  );
};
