import { useContext, useEffect, useRef, useState } from 'react';
import { AboutInformation } from './AboutInformation';
import { AboutItem } from './AboutItem';
import { aboutItemAnimation } from '../../../../animations';
import { LocoScrollContext, ScreenContext } from '../../../../context';


const features = [
  { 
    title: 'Diseño',
    text: 'Combinamos ingeniería, experiencia, tecnología de fabricación y pruebas en campo para crear fusiles que destacan en todos los aspectos.'
  },
  {
    title: 'Calidad',
    text: 'Utilizamos materiales de alto rendimiento y tecnología CNC de última generación para garantizar la máxima calidad en cada pieza.'
  },
  {
    title: 'Versatilidad',
    text: 'Adaptamos nuestros fusiles a tus necesidades, permitiendo configuraciones personalizadas dentro de su propósito principal.'
  },
  {
    title: 'Precisión',
    text: 'La precisión está en nuestro ADN. Consideramos cada detalle que la influye desde el diseño hasta la fabricación.'
  },
];

export const AboutSection = () => {

  const { startAnimation  } = useContext(LocoScrollContext);
  const { screenPx } = useContext(ScreenContext);

  const refs = useRef({}); 

  const setRef = (node, id) => {
    if(node) {
      refs.current[id] = node;
    }
  };

  const calculateHeightDifference = () => {
    if (!refs.current[1] || !refs.current[2]) {
      return;
    } 
    const heightDifference =
    refs.current[1].offsetHeight - refs.current[2].offsetHeight;

    if(heightDifference !== 0 && refs.current[3]) {
      refs.current[3].style.marginTop = `${-Math.abs(heightDifference)}px`; 
    }
  };

  const resetHeight = () => {
    if(refs.current[1] && refs.current[3] && refs.current[4]) {
      refs.current[3].style.height = 'auto';
      refs.current[1].style.height = 'auto';
      refs.current[4].style.height = 'auto';
    }
  }

  const tabletHeight = () => {
    if(refs.current[3] && refs.current[1]) {
      refs.current[3].style.height = `${refs.current[2].offsetHeight}px`;
    }; 
    if(refs.current[4]) {
      refs.current[4].style.height = `${refs.current[1].offsetHeight}px`;
    };
  }

  const desktopHeight = () => {
    if(refs.current[3] && refs.current[1]) {
      refs.current[1].style.height = `${refs.current[3].offsetHeight}px`;
    }; 
    if(refs.current[4]) {
      refs.current[4].style.height = `${refs.current[2].offsetHeight}px`;
    };
  }

  const resetMarginTop = () => {
    if(refs.current[3]) {
      refs.current[3].style.marginTop = '0px';
    }
  }
  
  useEffect(() => {
      console.log('calculo en estado global con screenPx ', screenPx)
      if(screenPx>=665 && screenPx<1024) {
        console.log('se ejecuto');
        calculateHeightDifference();
        tabletHeight();
      } else if(screenPx>=1040) {
          resetHeight();
          resetMarginTop();
          desktopHeight();
      } else {
        resetMarginTop();
        resetHeight();
      }
  }, [screenPx]);
  
  useEffect(() => {
    if(!startAnimation) return;
    Object.values(refs.current).forEach((node, index) => {
      aboutItemAnimation(node, index + 1);  
    });
  }, [startAnimation]);

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
