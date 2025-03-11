import App from "./App";
import Shop from "./shop/shop";
import Cart from "./cart/cart";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />
  }
];

export default routes;
