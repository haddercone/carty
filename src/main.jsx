import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App.jsx"
import Body from './components/Body'
import CategoryProducts from './components/CategoryProducts'
import Error from './components/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/category/:id",
        element: <CategoryProducts />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
