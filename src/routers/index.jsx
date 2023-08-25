import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Checkout from "../pages/Checkout.jsx";
import Pembayaran from "../pages/Pembayaran.jsx";
import { card } from "../components/ProductCatalog/product.js";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:title",
        element: <ProductDetails />,
      },
      {
        path: "/checkout/:title",
        element: <Checkout title={card.title} />,
      },
      {
        path: "/pembayaran/:title",
        element: <Pembayaran />,
      },
    ],
  },
]);
