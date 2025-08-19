// react-router - Data mode
import { RouterProvider } from "react-router";
import router from "./router/router";
import { HelmetProvider } from "@dr.pogodin/react-helmet";

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  );
}
export default App;
