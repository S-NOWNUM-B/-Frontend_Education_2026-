import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import NotFound from './NotFound';
import CourseDetail from './CourseDetail';
import { getCourseById } from './data';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: '/course/:id',
    element: <CourseDetail />,
    errorElement: <NotFound />,
    loader: async ({ params }) => {
      const course = getCourseById(Number(params.id));
      if (!course) {
        throw new Response('Not Found', { status: 404 });
      }
      return { course };
    }
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);