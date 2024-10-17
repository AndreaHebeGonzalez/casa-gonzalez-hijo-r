import { AboutInformation } from './AboutInformation'
import { AboutItem } from './AboutItem'

const features = [
  {
    title: '01 Diseño',
    text: 'Cuatro tópicos esenciales hacen al diseño de nuestros fusiles: ingeniería, experiencia, tecnología de fabricación y validación en campo.'
  },
  {
    title: '02 Versatilidad',
    text: 'Ofrecemos versatilidad en la configuración final de nuestros fusiles dentro de los rangos de su función principal.'
  },
  {
    title: '03 Calidad',
    text: 'Desde  la selección de los mejores materiales disponibles, hasta el uso de modernos equipos de mecanizado CNC, la ingeniería de fabricación que utilizamos es una garantía de calidad.'
  },
  {
    title: '04 Precisión',
    text: 'Garantizar precisión es parte de nuestro ADN como empresa, sabemos los factores que la gobiernan y los contemplamos desde la etapa de diseño.'
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
console.log(featurePairs)
export const AboutSection = () => {


  return (
    <section className="about-s section container">
      <div className="about-s__flex">
        <AboutInformation />
        <div className="about-s__items">
          {featurePairs.map((pair, index) => (
            <div className="about-s__items-item" key={index}>
              {pair.map((feature, subIndex) => (
                <AboutItem 
                  key={`${index}-${subIndex}`} 
                  title={feature.title} 
                  text={feature.text} 
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
