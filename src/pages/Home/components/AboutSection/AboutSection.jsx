import { useContext, useEffect, useRef, useState } from 'react';
import { PreloaderContext } from "../../../../context/PreloaderContext";
import { AboutInformation } from './AboutInformation'
import { AboutItem } from './AboutItem'


const features = [
  { 
    title: 'Diseño',
    text: 'Nuestro enfoque combina ingeniería, experiencia, tecnología de fabricación y pruebas en campo para crear fusiles que destacan en todos los aspectos.'
  },
  {
    title: 'Versatilidad',
    text: 'Adaptamos nuestros fusiles a tus necesidades, permitiendo configuraciones personalizadas dentro de su propósito principal.'
  },
  {
    title: 'Calidad',
    text: 'Utilizamos materiales de alto rendimiento y tecnología CNC de última generación para garantizar la máxima calidad en cada pieza.'
  },
  {
    title: 'Precisión',
    text: 'La precisión está en nuestro ADN. Consideramos cada detalle que la influye desde el diseño hasta la fabricación.'
  },
];


const splitFeatures = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const featurePairs = splitFeatures(features, 2); 


export const AboutSection = () => {

  const [tabletVersion, setTabletVersion] = useState(window.innerWidth >= 665 &&  window.innerWidth < 1024);

  const { completeBar, startAnimation } = useContext(PreloaderContext);

  const refs = useRef({}); 

  const setRef = (node, id) => {
    if(node) {
      refs.current[id] = node;
    }
  };

  const updateViewVersion = () => {
    setTabletVersion(window.innerWidth >= 665 &&  window.innerWidth < 1024);
  };

  const calculateHeightDifference = () => {
    if (!refs.current[1] || !refs.current[3]) {
      console.log(refs.current[1]);
      console.log(refs.current[3]);
      console.log("Las referencias no están listas.");
      return;
    } 
    console.log("Calculando la diferencia de altura...");

    const heightDifference =
    refs.current[1].offsetHeight - refs.current[3].offsetHeight;

    console.log('la diferencia es:', heightDifference);

    if(heightDifference !== 0 && refs.current[3]) {
      refs.current[3].style.marginTop = `${-Math.abs(heightDifference)}px`; 
    }

    if(refs.current[4]) {
      refs.current[4].style.height = `${refs.current[1].offsetHeight}px`
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewVersion);
    console.log(tabletVersion)
    setTimeout(() => {
      if(tabletVersion) {
        calculateHeightDifference();
      } else {
        refs.current[3].style.marginTop = '0px';
      }

    }, 200);

    return () => {
      window.removeEventListener('resize', updateViewVersion);
    }
  }, [completeBar, tabletVersion]);
  

return (
  <section className="about-s section container">
    <div className="about-s__flex">
      <AboutInformation />

      <div className="about-s__items">
        {
          features.map((feature, index) => (
            <AboutItem 
              key={`${feature.title}-${index}`} 
              title={feature.title} 
              text={feature.text} 
              index={index}
              setRef = { setRef }
            />
          ))
        }
      </div>
    </div>
  </section>
)}
