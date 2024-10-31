import { Home, Contact, About, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs, BtnScroll, Preloader } from '../components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocoScroll } from '../hooks/useLocoScroll';
import { ScreenContext } from '../context/ScreenContext';

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
  const [completeBar, setCompletBar] = useState(false);

  const { mobileVersion } = useContext(ScreenContext);

  const location = useLocation();

  const locoScroll = useLocoScroll(setHasScrolled, setShowBtnScroll);

  const handleCompleteBar = () => {
    setCompletBar(true);
  };
  
  useEffect(() => {
    const scrollContainer = document.querySelector('#main-container');
    
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      if (locoScroll) {
        locoScroll.update();
      };
    };
  }, [location.pathname]);



  return (
    <>
      {
        !completeBar && <Preloader barComplete={ handleCompleteBar }/> 
      }
      
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
  );
};
