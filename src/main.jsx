import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import BasketProvider from "./context/BasketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
  </ChakraProvider>
);
