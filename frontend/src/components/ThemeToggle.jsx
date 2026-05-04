import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="
        relative flex items-center
        w-14 h-8
        rounded-full
        transition-colors duration-300
        bg-gray-200 dark:bg-gray-700
        shadow-inner
      "
    >
      {/* Thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`
          absolute top-1
          w-6 h-6 rounded-full
          flex items-center justify-center
          shadow-md
          ${darkMode ? "translate-x-7 bg-gray-900" : "translate-x-1 bg-pink-50"}
        `}
      >
        <motion.span
          key={darkMode ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          className="text-xs"
        >
          {darkMode ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
