import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Chefs from './Pages/Chefs.jsx';
import Blog from './Pages/Blog.jsx';
import Loading from './Components/Loading.jsx';
import ChefRecipes from './Pages/ChefRecipes.jsx';
import Registaion from './Pages/Registaion.jsx';
import LoginForm from './Pages/LoginForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('https://server-side-atiqurrahman.vercel.app/'),
    children: [{
      path: "/",
      element: <Home />

    }, {
      path: "/chefs",
      element: <Chefs />
    },
    {
      path: "chef/:id",
      element: <ChefRecipes />,
      loader: ({ params }) => fetch(`https://server-side-atiqurrahman.vercel.app/singleChef/${params.id}`)
    }
      , {
      path: "/blog",
      element: <Blog />
    }, {
      path: "/login",
      element: <LoginForm />
    }, {
      path: "/registation",
      element: <Registaion />
    }

    ]
  }, {
    path: 'loading',
    element: <Loading />
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
