import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import Sidebar from "../Components/Home/Sidebar";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layouts;
