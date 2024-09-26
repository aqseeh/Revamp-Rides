import AppRoutes from "./approutes";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Toaster />
      <AppRoutes />
    </>
  );
}

export default App;
