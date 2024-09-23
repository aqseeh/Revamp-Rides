import NavBar from "./navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      {/* outlet is used to toggle(render)pages */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
