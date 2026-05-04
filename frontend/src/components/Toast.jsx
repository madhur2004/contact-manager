import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const config = {
    success: {
      icon: "✅",
      ring: "ring-green-500",
      bg: "bg-green-50 dark:bg-green-950",
      text: "text-green-700 dark:text-green-300",
    },
    error: {
      icon: "❌",
      ring: "ring-red-500",
      bg: "bg-red-50 dark:bg-red-950",
      text: "text-red-700 dark:text-red-300",
    },
    warning: {
      icon: "⚠️",
      ring: "ring-yellow-500",
      bg: "bg-yellow-50 dark:bg-yellow-950",
      text: "text-yellow-700 dark:text-yellow-300",
    },
    info: {
      icon: "ℹ️",
      ring: "ring-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950",
      text: "text-blue-700 dark:text-blue-300",
    },
  };

  const current = config[type] || config.info;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`
          fixed top-5 right-5 z-50
          flex items-center gap-3
          px-4 py-3
          rounded-2xl
          shadow-lg
          border border-white/10 dark:border-gray-800
          ${current.bg}
          ${current.text}
          ring-1 ${current.ring}
          backdrop-blur-xl
          min-w-65 max-w-sm
        `}
      >
        {/* Icon */}
        <span className="text-xl">{current.icon}</span>

        {/* Message */}
        <span className="flex-1 text-sm font-medium leading-snug">
          {message}
        </span>

        {/* Close */}
        <button
          onClick={onClose}
          className="
            text-gray-500 hover:text-gray-900 dark:hover:text-white
            transition
          "
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
