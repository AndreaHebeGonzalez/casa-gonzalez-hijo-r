import gsap from "gsap";

export const barPreloader = (progress, completeBar) => {

  if(!completeBar) {
    gsap.to('.progress-bar', {
      width: `${progress}%`,
      duration: 0.2,
      ease: "power1.out",
    });
  }  
};

export const endPreloader = (onCompleteBar) => {

  const tlEndPreloader = gsap.timeline();

  tlEndPreloader.to('.introName', {
    duration: 0.7,
    delay: 0.7,
    y: -30,
    ease: 'power1',
  }, 0.7)
  .to('.preloader', {
    duration: 0.2,
    opacity: 0,
    ease: 'power1.inOut',
    onComplete: () => {
      if (onCompleteBar) onCompleteBar();
    }
  },"0.2>")
};