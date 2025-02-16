import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ozbekiston from "./pages/Ozbekiston";
import Jahon from "./pages/Jahon";
import Iqtisodiyot from "./pages/Iqtisodiyot";
import Jamiyat from "./pages/Jamiyat";
import Sport from "./pages/Sport";
import FanTexnika from "./pages/FanTexnika";
import NuqtayiNazar from "./pages/NuqtayiNazar";
import Audio from "./pages/Audio";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Ozbekiston />,
    },
    {
      path: "/Jahon",
      element: <Jahon />,
    },
    {
      path: "/Iqtisodiyot",
      element: <Iqtisodiyot />,
    },
    {
      path: "/Jamiyat",
      element: <Jamiyat />,
    },
    {
      path: "/Sport",
      element: <Sport />,
    },
    {
      path: "/FanTexnika",
      element: <FanTexnika />,
    },
    {
      path: "/NuqtayiNazar",
      element: <NuqtayiNazar />,
    },
    {
      path: "/Audio",
      element: <Audio />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
