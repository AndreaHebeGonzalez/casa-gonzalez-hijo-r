import { Home, Contact, About, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs, BtnScroll } from '../components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      setHasScrolled(window.scrollY > 100);
      setShowBtnScroll(window.scrollY > 250);
    };


    window.addEventListener('scroll', handleScroll);
    
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  

  return (
    <>
      <header className= { `header ${ hasScrolled ? 'disappear':''}` } >
        { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar />}
      </header>
      
      <main>
        <Outlet />
        
        <BtnScroll showBtnScroll = { showBtnScroll } />
        

      </main>
      
      <Footer />
  

    </>
  )
}
