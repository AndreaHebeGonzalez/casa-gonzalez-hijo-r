import gsap from "gsap";

export const animationBar = (progress) => {
  gsap.to('.progress-bar', {
    width: `${progress}%`,
    duration: 0.2,
    ease: "power1.out",
  });
};

export const animationPreloader = () => {
  gsap.to('.preloader', {
    duration: 0.1,
    delay: 0.7,
    opacity: 0,
    ease: 'power1.inOut',
  });
};

export const introAnimation = (barComplete) => {

    gsap.to('.first', {
      duration: 1.3,
      delay: .2 + 1,
      left: '100%',
      ease: 'power1.inOut'
    })
    
    gsap.to('.second', {
      duration: 1.3,
      delay: .4 + 1,
      left: '100%',
      ease: 'power1.inOut'
    })
    
    gsap.to('.third', {
      duration: 1.3,
      delay: .6 + 1,
      left: '100%',
      ease: 'power1.inOut',
      onComplete: () => {
        if (barComplete) barComplete();
    }
    })
};


