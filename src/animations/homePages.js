import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* export const aboutItemAnimation = (element) => {
  gsap.fromTo(
    element, 
    { 
      opacity: 0, 
      color: "transparent" 
    },
    {
      opacity: 1,
      color: "#ff0055",
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: element, 
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse", 
        scroller: "#main-container", 
        markers: true,
      },
    }
  );
}; */
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