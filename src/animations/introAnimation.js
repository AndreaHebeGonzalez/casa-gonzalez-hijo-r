import SplitType from "split-type";
import gsap from "gsap";


export const introAnimation = () => {

  const subtitleHero = new SplitType('.hero__subtitle', { 
    types: 'lines, words', 
    lineClass: 'hero__subtitleParent',
    wordClass: 'hero__subtitleChildren' 
  });
  
  const h1Hero = new SplitType('.hero__heading', {
    types: 'lines, words',
    lineClass: 'hero__titleParent',
    wordClass: 'hero__titleChildren'
  });

  gsap.set('.nav__item .nav__link', { opacity: 0, x: -20 });
  gsap.set('.nav__divider', { opacity: 0, x: -20 });
  gsap.set('.header__logo', { opacity: 0, x: -20 });

  gsap.set(subtitleHero.words, { opacity: 0, y: -300 });
  gsap.set(h1Hero.words, { opacity: 0, y: -300 });

  
    const tlIntro = gsap.timeline();

    tlIntro.to('.header__logo', {
      duration: 0.8,
      opacity: 1,
      x: 0,
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
    .to(subtitleHero.words, {
      duration: 1,
      y: 0, 
      opacity: 1, 
      stagger: 0.1, 
      ease: "power2", 
    }, '<.2') //Comienza 0.2 despues del inicio de la anterior animacion
    .to(h1Hero.words, {
      duration: 1,
      y: 0, 
      opacity: 1, 
      stagger: 0.1, 
      ease: "power2", 
    }, '<.08')
    .from('.hero__btn-light', {
      duration: 0.8,
      x: -200, 
      opacity: 1, 
      ease: "power2",
    }, '<0')
};