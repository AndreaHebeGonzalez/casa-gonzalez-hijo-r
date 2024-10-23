import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { childMainLayout,  MainLayout } from '../layouts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: childMainLayout
  }
]);


export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

