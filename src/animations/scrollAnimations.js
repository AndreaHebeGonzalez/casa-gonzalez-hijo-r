import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimations = (element) => {

  
  /* gsap.fromTo(
    element,
    {
      opacity: 0,      // Oculta el elemento
      x: -100,         // Mueve el elemento fuera de la pantalla a la izquierda (ajusta el valor según sea necesario)
    },
    {
      opacity: 1,      // Aumenta la opacidad para hacer que el elemento aparezca
      x: 0,            // Mueve el elemento a su posición original
      duration: 1,     // Duración de la animación en segundos
      ease: "power3.out", // Efecto de suavizado para la animación
      scrollTrigger: {
        trigger: element,
        start: "top 80%",        // Ajusta para definir cuándo debería comenzar la animación
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Controla cómo se reproduce y se invierte la animación
        scroller: "#main-container", // Asegúrate de que esta sea la referencia correcta para Locomotive Scroll
      },
    }
  ); */
};
/* 

!gsap.registerPlugin(ScrollTrigger); -->
Necesaria para habilitar el uso de scrollTrigger,  GSAP es modular, por lo que los plugins no se cargan automáticamente para evitar cargar código innecesario. ScrollTrigger es uno de esos plugins que necesitas habilitar manualmente.

  gsap.fromTo(
    myRef.current,               // 1. Elemento al que se aplicará la animación
    { opacity: 0, y: 50 },       // 2. Estado inicial de la animación
    {
      opacity: 1,                // 3. Estado final: opacidad del elemento será 1
      y: 0,                      // El elemento se moverá a la posición original en el eje Y (y: 0)
      duration: 1,               // Duración de la animación en segundos
      scrollTrigger: {           // 4. Configuración de ScrollTrigger
        trigger: myRef.current,  // 4a. Elemento que activará el ScrollTrigger
        start: "top 80%",        // 4b. La animación comienza cuando la parte superior del elemento llega al 80% de la altura de la ventana
        end: "top 30%",          // 4c. La animación termina cuando la parte superior del elemento llega al 30% de la ventana
        scrub: true,             // 4d. La animación se ajusta según la posición de scroll
      },
    }
  );*/