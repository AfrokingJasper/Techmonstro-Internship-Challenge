import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Root";
import GeneralLayout from "./components/generalLayout/GeneralLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <GeneralLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
