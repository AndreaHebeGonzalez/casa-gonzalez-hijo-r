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

  useLocoScroll(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      setHasScrolled(window.scrollY > 400);
      setShowBtnScroll(window.scrollY > 250);
    };


    window.addEventListener('scroll', handleScroll);
    
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <div id="main-container" data-scroll-container>
      <header className= { `header ${ hasScrolled ? 'disappear':''}` }  data-scroll-section>
        { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar />}
      </header>
      
      <main data-scroll-section>
        <Outlet />
        
        <BtnScroll showBtnScroll = { showBtnScroll } />
      </main>
      
      <footer data-scroll-section>
        <Footer />
      </footer>  
    </div>
  )
}
