import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'


const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />
    }
  ]
}, {
  path: '/login',
  element: <Login />
}])

const App = () => <RouterProvider router={router} />

export default App
