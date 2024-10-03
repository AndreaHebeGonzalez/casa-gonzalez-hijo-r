import { Home, Contact, About } from '../../pages';
import { Navbar, Footer } from '../components';
import { Outlet, Navigate } from 'react-router-dom';

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
    path: '*', // '*'
    element: <Navigate to= { '/home' } replace />
  }
];

export const MainLayout = () => {
  return (
    <div>
        <h1>Pagina pricipal</h1>
        <Navbar />

        <div>
          <Outlet />
        </div>

        <Footer />
    </div>
  )
}
