import { Home, Contact, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs, BtnScroll, Preloader } from '../components';

import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocoScroll } from '../hooks/useLocoScroll';

import { barPreloader, endPreloader, introAnimation } from '../animations';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PreloaderContext, ScreenContext } from '../context';

gsap.registerPlugin(ScrollTrigger);

export const childMainLayout = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/categorie/:name',
    element: <Categorie />
  },
  {
    path: '/product/:id',
    element: <ProductDetail />
  },
  {
    path: '/*', 
    element: <Navigate to= { '/' } replace />
  }
];

export const MainLayout = () => {

  const [hasScrolled, setHasScrolled] = useState(false);
  const [showBtnScroll, setShowBtnScroll] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const id = useRef(null);

  const { mobileVersion } = useContext(ScreenContext);
  const { completeBar, setCompleteBar } = useContext(PreloaderContext);

  const location = useLocation();

  /* LocomotiveScroll instance */
  const locoScroll = useLocoScroll(setHasScrolled, setShowBtnScroll);


  /* Set CompleteBar   */
  const onCompleteBar = () => {
    setCompleteBar(true);
  };

  /* Interval preloader */
  useEffect(() => {
    id.current = setInterval(() => {
      setProgress(prev => {
        const updatedProgress = prev + Math.floor(Math.random() * 50); 
        return updatedProgress >= 100  ? 100 : updatedProgress;
      });
    }, 500);

    return  () => clearInterval(id.current);
  }, []);

  /* Clear Interval */
  useEffect(() => {
    barPreloader(progress, completeBar);
    if(progress === 100) {
      clearInterval(id.current);
      endPreloader(onCompleteBar);
    } 
  }, [progress]);


  useEffect(() => {
    if(!completeBar) return;
      introAnimation();
  }, [completeBar])
  

  /* useEffect(() => {

    if (!completeBar) return; 

    const scrollContainer = document.querySelector('#main-container');
    if (scrollContainer) {
      locoScroll?.scrollTo(0, { duration: 0, disableLerp: true });

      // Refresca ScrollTrigger y LocomotiveScroll al cambiar la ruta
      ScrollTrigger.refresh();
      locoScroll?.update();
    }
  }, [location.pathname, completeBar]); */
  

  return (
    <>
      <Preloader progress = { progress } /> 
      <div id="main-container" data-scroll-container>
        <header className= { `header ${ hasScrolled && !mobileVersion ? 'disappear':''}` } data-scroll-sticky data-scroll-target="#main-container">
          { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar hasScrolled = { hasScrolled } />}
        </header>
        
        <main className='main' data-scroll-section>
          <Outlet />
        </main>

        <footer data-scroll-section>
          <Footer />
        </footer>  

        <BtnScroll showBtnScroll = { showBtnScroll } locoScroll = { locoScroll } />      
      </div>
    </> 
  );
};