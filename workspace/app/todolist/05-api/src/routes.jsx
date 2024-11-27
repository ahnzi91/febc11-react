import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "@components/Layout";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import About from "@pages/about";
import TodoList from "@pages/TodoList";
import TodoAdd from "@pages/TodoAdd";
import TodoEdit from "@pages/TodoEdit";
import TodoDetail from "@pages/TodoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "list", element: <TodoList /> },
      { path: "add", element: <TodoAdd /> },
      {
        path: "list/:_id",
        element: <TodoDetail />,
        children: [{ path: "edit", element: <TodoEdit /> }],
      },
    ],
  },
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
]);

export default router;
