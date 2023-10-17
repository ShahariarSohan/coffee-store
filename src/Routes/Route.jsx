import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Mainlayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import UpdateCoffee from "../Pages/UpdateCoffee";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("http://localhost:4000/coffees"),
      },
      {
        path: "/coffees/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
      },
    ],
  },
]);
export default myRouter;
