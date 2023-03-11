import Home from "../page/Home";
import ListProducts from "../page/ListProducts";

const dataRoutes = [
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "products",
    element: <ListProducts />,
  },
];

export { dataRoutes };
