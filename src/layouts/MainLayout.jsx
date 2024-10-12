import { Home, Contact, About, Categorie, ProductDetail } from '../pages';
import { Navbar, Footer, Breadcrumbs } from '../components';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

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

  const location = useLocation();

  return (
    <>
      <header className="header">
        { location.pathname.includes('categorie') || location.pathname.includes('product') ? <Breadcrumbs /> : <Navbar />}
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}
