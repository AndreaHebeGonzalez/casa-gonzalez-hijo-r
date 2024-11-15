import { Home, Contact, About, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs, BtnScroll, Preloader } from '../components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocoScroll } from '../hooks/useLocoScroll';
import { ScreenContext } from '../context/ScreenContext';
import { PreloaderContext } from '../context/PreloaderContext';
import { barPreloader, endPreloader, introAnimation } from '../animations';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const childMainLayout = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
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
    path: '/', // '*'
    element: <Navigate to= { '/home' } replace />
  },
  {
    path: '/*', // '*'
    element: <Navigate to= { '/home' } replace />
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

  const locoScroll = useLocoScroll(setHasScrolled, setShowBtnScroll, completeBar);

  const onCompleteBar = () => {
    setCompleteBar(true);
  };

  useEffect(() => {
    id.current = setInterval(() => {

      setProgress(prev => {
        const updatedProgress = prev + Math.floor(Math.random() * 50); 
        return updatedProgress >= 100  ? 100 : updatedProgress;
      });

    }, 500);

    return  () => clearInterval(id.current);
  }, []);

  useEffect(() => {
    barPreloader(progress, completeBar);
    if(progress === 100) {
      clearInterval(id.current);
      endPreloader(onCompleteBar);
    } 
  }, [progress]);

  useEffect(() => {
      if(!completeBar) {
        document.body.style.height = '100vh'
      } else {
        document.body.style.height = 'auto'
        introAnimation(completeBar);
      }
  }, [completeBar]);

  useEffect(() => {

    if (!completeBar) return; 

    const scrollContainer = document.querySelector('#main-container');
    if (scrollContainer) {
      locoScroll?.scrollTo(0, { duration: 0, disableLerp: true });

      // Refresca ScrollTrigger y LocomotiveScroll al cambiar la ruta
      ScrollTrigger.refresh();
      locoScroll?.update();
    }
  }, [location.pathname, completeBar]);
  

  return (
    <>
      {
        !completeBar ? <Preloader /> : 
        <> 
          <div className="overlay first"></div>
        
          <div className="overlay second"></div>
          <div className="overlay third"></div>

          <div id="main-container" data-scroll-container>
            <header className= { `header ${ hasScrolled && !mobileVersion ? 'disappear':''}` } data-scroll-sticky data-scroll-target="#main-container">
              { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar hasScrolled = { hasScrolled } />}
            </header>
            
            <main data-scroll-section>
              <Outlet />
            </main>

            <footer data-scroll-section>
              <Footer />
            </footer>  

            <BtnScroll showBtnScroll = { showBtnScroll } locoScroll = { locoScroll } />      
          </div>
        </>
      }  
    </> 
  );
};