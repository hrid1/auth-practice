import "./App.css";
import Root from "./pages/Root/Root";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
