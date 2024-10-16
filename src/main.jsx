import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProvider from './AuthProvider/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router}>
    </RouterProvider>,
  </AuthProvider>
)
