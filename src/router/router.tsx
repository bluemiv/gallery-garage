import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage.tsx';
import BaseLayout from '../layout/BaseLayout.tsx';
import GalleryPage from '../pages/GalleryPage.tsx';

export const ROUTE_PATH = {
  ROOT: '/',
  GALLERY: '/gallery',
};

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: ROUTE_PATH.ROOT, element: <RootPage /> },
      { path: ROUTE_PATH.GALLERY, element: <GalleryPage /> },
    ],
  },
]);
