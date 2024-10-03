import { Navigate, Outlet } from 'react-router-dom';
import { Categories, ProductDetail } from '../../pages';
import { Breadcrumbs } from '../components';


export const childSimpleLayout = [
  {
    path: "categories/:name",
    element: <Categories />
  },
  {
    path: "product/:id",
    element: <ProductDetail />
  },
  {
    path: '',
    element: <Navigate to= { '/home' } replace />
  }
];

export const SimpleLayout = () => {
  return (
    <section>
      <Breadcrumbs />
      <div>
        <Outlet />
      </div>
    </section>
  );
};
