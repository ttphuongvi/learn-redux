import HomePage from "../page/HomePage";
import ListProducts from "../page/ListProducts";

const dataRoutes = [
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "products",
    element: <ListProducts />,
  },
];

export { dataRoutes };
