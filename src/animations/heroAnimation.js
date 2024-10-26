import SplitType from "split-type";
import gsap from "gsap";

export const heroAnimation = (heroText, HeroBtnPulse) => {
  
  if(!heroText || !HeroBtnPulse) return;

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
  
  

  gsap.to(subtitleHero.words, {
    delay: 1.6,
    duration: 1,
    y: 0, 
    opacity: 1, 
    stagger: 0.1, 
    ease: "power2", 
  });

  gsap.to(h1Hero.words, {
    delay: 1.6,
    duration: 1,
    y: 0, 
    opacity: 1, 
    stagger: 0.1, 
    ease: "power2", 
  });

  gsap.set('.hero__box-btn-pulse', { scale: 0, opacity: 1 });

  gsap.to('.hero__box-btn-pulse', {
    delay: 1.8, 
    duration: 1, 
    scale: 1, 
    ease: "back.inOut", 
});
};


