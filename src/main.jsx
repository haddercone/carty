import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Category from './components/Category'
import Body from './components/Body'
import Products from './components/Products'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/category/:category",
        element: <Category />
      },
      {
        path:"/data",
        element: <Products />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
