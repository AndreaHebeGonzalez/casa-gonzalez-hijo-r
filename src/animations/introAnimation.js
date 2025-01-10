import SplitType from "split-type";
import gsap from "gsap";


export const introAnimation = () => {

  const subtitleHero = new SplitType('.hero__subtitle', { 
    types: 'lines, chars', 
    lineClass: 'hero__subtitleParent',
    wordClass: 'hero__subtitleChildren' 
  });
  
  const h1Hero = new SplitType('.hero__heading', {
    types: 'lines, chars',
    lineClass: 'hero__titleParent',
    charClass: 'hero__titleChildren'
  });

  gsap.set('.header__logo', { opacity: 0, y: -70 });

  gsap.set(subtitleHero.chars, { opacity: 0, y: "115px" });
  gsap.set(h1Hero.chars, { opacity: 0, y: "115px" });
  gsap.set(".hero__btn-light", { x: -20 })

  gsap.to('.hero__heading', {
    opacity: 1,
    ease: "none",
    delay: 0.01
  });

  gsap.to('.hero__subtitle', {
    opacity: 1,
    ease: "none",
    delay: 0.01
  });

  gsap.matchMedia().add(
    "(max-width: 1279px)", 
    () => {

      gsap.set('.header__menu-abrir', { opacity: 0, y: -70 });

      const tlIntro = gsap.timeline();

    
      tlIntro
      .to('.header__logo', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4',
      })
      .to('.header__menu-abrir', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power4',
      }, '<.02')

      .to(subtitleHero.chars, {
        duration: 1,
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        ease: "circ.inOut", 
      }, '<.02') //Comienza 0.2 despues del inicio de la anterior animacion
      .to(h1Hero.chars, {
        duration: 1,
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        ease: "circ.inOut", 
      }, '<.02')
      .to('.hero__btn-light', {
        duration: 1,
        x: 0, 
        opacity: 1, 
        ease: "power2",
      }, '<0.25')
    }
  );

  gsap.matchMedia().add(
    "(min-width: 1280px)", 
    () => {
      gsap.set('.nav__item .nav__link', { opacity: 0, x: -20 });
      gsap.set('.nav__divider', { opacity: 0, x: -20 });
      
      const tlIntro = gsap.timeline();
    
      tlIntro.to('.header__logo', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: 'power4',
      }, '<.4')
      .to('.nav__item .nav__link', {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: 'power4',
        stagger: 0.08
      }, '<.2')
      .to('.nav__divider', {
        opacity: 1,
        x: 0,
        ease: 'power4',
      }, '< 0.08*3')

      .to(subtitleHero.chars, {
        duration: 1,
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        ease: "circ.inOut", 
      }, '<.02') //Comienza 0.2 despues del inicio de la anterior animacion
      .to(h1Hero.chars, {
        duration: 1,
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        ease: "circ.inOut", 
      }, '<.02')
      .to('.hero__btn-light', {
        duration: 1,
        x: 0, 
        opacity: 1, 
        ease: "power2",
      }, '<0.25')
    }
  );
};