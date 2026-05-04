import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-[70vh] flex items-center justify-center px-4"
    >
      <div className="text-center max-w-md space-y-6">
        {/* Animated 404 */}
        <motion.h1
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          className="text-7xl font-extrabold text-gray-900 dark:text-white"
        >
          404
        </motion.h1>

        {/* Message */}
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Illustration vibe block */}
        <div
          className="
          w-full h-40 rounded-2xl
          bg-linear-to-r from-blue-500/10 to-purple-500/10
          flex items-center justify-center
        "
        >
          <span className="text-4xl">🚧</span>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="
            inline-block px-6 py-3
            bg-linear-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            text-white font-medium
            rounded-2xl
            shadow-lg
            transition-all
          "
        >
          ← Back to Dashboard
        </Link>

        {/* Hint */}
        <p className="text-xs text-gray-400">
          Check URL or return to home page
        </p>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
