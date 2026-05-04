import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-950 dark:to-black transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Content Card Wrapper (modern dashboard feel) */}
          <div
            className="
            bg-white/70 dark:bg-gray-900/60 
            backdrop-blur-xl
            border border-gray-100 dark:border-gray-800
            rounded-3xl
            shadow-lg
            p-4 sm:p-6 lg:p-8
            min-h-[calc(100vh-120px)]
          "
          >
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
