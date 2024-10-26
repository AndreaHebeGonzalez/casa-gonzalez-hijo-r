
import gsap from "gsap";


export const introAnimation = () => {

  gsap.to('.first', {
    duration: 1.5,
    delay: .2,
    left: '100%',
    ease: 'power1.inOut'
  })
  
  gsap.to('.second', {
    duration: 1.5,
    delay: .4,
    left: '100%',
    ease: 'power1.inOut'
  })
  
  gsap.to('.third', {
    duration: 1.5,
    delay: .6,
    left: '100%',
    ease: 'power1.inOut'
  })
}

