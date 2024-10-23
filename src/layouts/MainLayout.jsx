import { Home, Contact, About, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs, BtnScroll } from '../components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocoScroll } from '../hooks/useLocoScroll';

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
  /* const [preloader, setPreloader] = useState(false); */

  const location = useLocation();

  const locoScroll = useLocoScroll(true, setHasScrolled, setShowBtnScroll);
  
  useEffect(() => {

    const scrollContainer = document.querySelector('#main-container');
    
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
      if (typeof locoScroll !== 'undefined') {
        locoScroll.update();
      }
    }
  }, [location.pathname]);

  return (
    <div id="main-container" data-scroll-container>
      <header className= { `header ${ hasScrolled ? 'disappear':''}` } data-scroll-sticky data-scroll-target="#main-container">
        { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar />}
      </header>
      
      <main data-scroll-section>
        <Outlet />
      </main>

      <footer data-scroll-section>
        <Footer />
      </footer>  

      <BtnScroll showBtnScroll = { showBtnScroll } locoScroll = { locoScroll } />
      
    </div>
  )
}
