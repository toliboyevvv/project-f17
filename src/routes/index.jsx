import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'
import BasketPage from '../pages/BasketPage'
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <h1>about page</h1>,
      },
      {
        path: '/contact',
        element: <h1>contact page</h1>,
      },
      {
        path: '/kitchen',
        element: <h1>kitchen page</h1>,
      },
      {
        path: '/bedroom',
        element: <h1>bed page</h1>,
      },
      {
        path: '/livingroom',
        element: <h1>living page</h1>,
      },
      {
        path: '/basket',
        element:<BasketPage />,
      },
      {
        path: '/user-profile',
        element: <h1>profile page</h1>,
      },
      {
        path: '/like',
        element: <h1>like page</h1>,
      },
    ],
  },
])
