import gsap from "gsap";


export const nameHeaderAnimation = (nameHeader) => {
  if(!nameHeader) return; 

  gsap.set('.header__name', { opacity: 0, x: -20 });

  gsap.to('.header__name', {
    delay: 1,
    opacity: 1,
    x: 0,
    ease: 'power4',
  });
};

export const headerAnimation = (headerBarr, navItems) => {

  if(!headerBarr) return; 

  gsap.set('.nav__item .nav__link', { opacity: 0, x: -20 });
  gsap.set('.nav__divider', { opacity: 0, x: -20 });
  gsap.set('.header__logo', { opacity: 0, x: -20 });

  gsap.to('.header__logo', {
    delay: 1.2,
    opacity: 1,
    x: 0,
    ease: 'power4',
    stagger: 0.08
  });

  gsap.to('.nav__item .nav__link', {
    delay: 1.3,
    opacity: 1,
    x: 0,
    ease: 'power4',
    stagger: 0.08
  });

  gsap.to('.nav__divider', {
    delay: 1.4 + 0.08 * navItems.length,
    opacity: 1,
    x: 0,
    ease: 'power4',
  });
};





