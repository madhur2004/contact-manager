import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center"
          >
            <Link
              to="/"
              className="
                text-xl sm:text-2xl font-bold
                bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600
                bg-clip-text text-transparent
                tracking-tight
              "
            >
              Contact Manager
            </Link>
          </motion.div>

          {/* Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="
      text-sm font-medium
      text-gray-700 dark:text-gray-300
      hover:text-blue-600 dark:hover:text-blue-400
      transition-colors
    "
            >
              <Home size={25} />
            </Link>
            {/* Add Button */}
            <Link
              to="/create"
              className="
                hidden sm:inline-flex
                items-center justify-center
                px-4 py-2 rounded-xl
                text-sm font-medium
                text-white
                bg-linear-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                shadow-sm hover:shadow-md
                transition-all duration-200
              "
            >
              + Add Contact
            </Link>

            {/* Mobile Add Button */}
            <Link
              to="/create"
              className="
                sm:hidden
                p-2 rounded-xl
                bg-blue-600 text-white
                hover:bg-blue-700
                transition
              "
            >
              +
            </Link>

            {/* Theme Toggle */}
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
