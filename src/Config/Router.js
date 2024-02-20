import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "../view/Dashboard";
// import Detail from "../view/Detail";
import Dashboard1 from "../view/Dashboard1/inedx";
import Detail1 from "../view/Detail1/index";
import Register from "../view/Register/index";
import Login from "../view/Login/index";
import Sellform from "../view/Sellform/index";
import Profile from "../view/Profile/index";
import Addtocart from "../view/Addtocart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard1 />,
    // path: "/dashboard",
    // element: <Dashboard />,
  },
  { path: "/register", element: <Register /> },

  { path: "/sellform", element: <Sellform /> },
  //
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addtocart",
    element: <Addtocart />,
  },
  {
    path: "/",
    element: <Dashboard1 />,
    // path: "/dashboard",
    // element: <Dashboard />,
  },
  {
    path: "/detail1/:id",
    element: <Detail1 />,
    // path: "/detail/:adId",
    // element: <Detail />,
  },
  { path: "/Profile", element: <Profile /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
