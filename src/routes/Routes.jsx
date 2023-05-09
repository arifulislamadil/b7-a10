import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Chefs from "../pages/Home/chefs/Chefs";
import Blogs from "../pages/blogs/Blogs";
import ChefDetails from "../pages/chefInfo/ChefDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        { path: "/",
         element:<Home/> },
         {
          path: "/chefs",
          element: <Chefs/>,
        },
         {
          path: "/chef/:id",
          element: <ChefDetails/>,
          loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
        },
         {
          path: "/blogs",
          element: <Blogs/>,
        },
         {
          path: "/login",
          element: <Login/>,
        },
         {
          path: "/register",
          element: <Register/>,
        },

    ],
  },
  
]);

export default router;