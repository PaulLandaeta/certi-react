import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
const LayoutPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <div className="fixed w-full z-10">
        <Navbar />
      </div>
      <div className="flex flex-row flex-1 h-screen pt-10">
        <div className="md:w-1/6 bg-blue-900 px-5 py-10 text-white">
          <h2 className="text-lg font-black text-center py-5">
            CRM - Clientes
          </h2>
          <Link
            className={`${
              pathname === "/home/dashboard" ? "font-bold" : ""
            } block text-center`}
            to={`dashboard`}
          >
            Dashboard
          </Link>
          <Link
            className={`${
              pathname === "/home/clients" ? "font-bold" : ""
            } block text-center`}
            to={`clients`}
          >
            Clientes
          </Link>
          <Link
            className={`${
              pathname === "/home/add-client" ? "font-bold" : ""
            } block text-center`}
            to={`add-client`}
          >
            Agregar Clientes
          </Link>
          <Link
            className={`${
              pathname === "/home/products" ? "font-bold" : ""
            } block text-center`}
            to={`products`}
          >
            Productos
          </Link>
        </div>
        <main className="md:w-5/6 p-10 overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default LayoutPage;
