import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-1 h-screen">
        <div className="w-1/4 bg-gray-300">
            <Link className="block text-center" to={`dashboard`}>Dashboard</Link>
            <Link className="block text-center"  to={`clients`}>Clientes</Link>
            <Link className="block text-center"  to={`products`}>Productos</Link>
        </div>
        <div className="flex-1 bg-neutral-400">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default LayoutPage;
