import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Client, Provider, cacheExchange, fetchExchange } from 'urql'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const client = new Client({
  url: 'http://localhost:5000/graphql',
  exchanges: [cacheExchange, fetchExchange]
})

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
}, {
  path: '/signup',
  element: <SignUp />
}])

const App = () => {
  return (
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
