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
  gsap.set('.preloader', { clipPath: 'inset(0% 0% 0% 0%)' })
  gsap.set('.overlay', { clipPath: 'inset(0% 0% 0% 0%)' })

  const tlEndPreloader = gsap.timeline();

  tlEndPreloader.to('.introName', {
    duration: 0.7,
    delay: 0.7,
    y: -30,
    ease: 'power1',
  }, 0.7)


  .to('.preloader', {
    duration: 1,
    clipPath: 'inset(0% 0% 100% 0%)',
    ease: 'expo',
    onComplete: () => {
      if (onCompleteBar) onCompleteBar();
    }
  },"0.2>")

  .to('.overlay', {
    duration: 1,
    clipPath: 'inset(100% 0% 0% 0%)',
    ease: 'expo',
  })
};