import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router";
import "./App.css";

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
