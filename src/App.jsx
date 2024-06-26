import HomePage from './routes/homepage/HomePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom"
import ListPage from './routes/listPage/ListPage.jsx'
import Layout from './routes/layout/Layout.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/list",
          element: <ListPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App