import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar will sit at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 pt-20">
        {/* Outlet renders the current route component */}

        <Outlet />
      </main>

      {/* Optional: Add a simple footer here if needed */}
      {/* <footer className="bg-white border-t border-gray-200 text-center p-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Your App Name
      </footer> */}
    </div>
  );
};

export default Layout;
