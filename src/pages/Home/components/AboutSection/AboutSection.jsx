import { AboutInformation } from './AboutInformation'
import { AboutItem } from './AboutItem'


const features = [
  { 
    title: '01 Diseño',
    text: 'Nuestro enfoque combina ingeniería, experiencia, tecnología de fabricación y pruebas en campo para crear fusiles que destacan en todos los aspectos.'
  },
  {
    title: '02 Versatilidad',
    text: 'Adaptamos nuestros fusiles a tus necesidades, permitiendo configuraciones personalizadas dentro de su propósito principal.'
  },
  {
    title: '03 Calidad',
    text: 'Utilizamos materiales de alto rendimiento y tecnología CNC de última generación para garantizar la máxima calidad en cada pieza.'
  },
  {
    title: '04 Precisión',
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

return (
  <section className="about-s section container">
    <div className="about-s__flex">
      <AboutInformation />
      <div className="about-s__items">
        {
          featurePairs.map((pair, index) => (
            <div className={`about-s__items-col about-s__items-col--${index}`} key={index}>
              {pair.map((feature, subIndex) => (
                <AboutItem 
                  key={`${subIndex}-${index}`} 
                  title={feature.title} 
                  text={feature.text} 
                  id={feature.title}
                />
              ))}
            </div>
          ))
        }
      </div>
    </div>
  </section>
)}
