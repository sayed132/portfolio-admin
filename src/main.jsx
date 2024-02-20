import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/users",
//     element: <Users />,
//     loader: () => fetch("http://localhost:5000/users"),
//   },
//   {
//     path: "/update/:id",
//     element: <UserUpdate />,
//     loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
