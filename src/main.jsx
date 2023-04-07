import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home';
import Layout from './component/Layout/Layout';
import OrderReview from './component/orderReview/OrderReview';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
      },
      {
        path:'review',
        element: <OrderReview></OrderReview>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
