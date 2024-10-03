import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { childMainLayout, childSimpleLayout, MainLayout, SimpleLayout } from '../ui';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: childMainLayout
  },
  {
    path: "/sl",
    element: <SimpleLayout />,
    children: childSimpleLayout
  }
]);


export const AppRouter = () => {
  return (
  <>
    <RouterProvider router={router} />
  </>
  );
};

