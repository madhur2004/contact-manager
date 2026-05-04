import { motion } from "framer-motion";

const SkeletonCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-100 dark:border-gray-800
        rounded-2xl
        p-5
        shadow-sm
      "
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/10 dark:via-white/5 to-transparent" />

      {/* Content */}
      <div className="space-y-4 relative">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-800 rounded-lg" />

        {/* Email */}
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded-md" />

        {/* Phone */}
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded-md" />

        {/* Address */}
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded-md" />

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <div className="h-9 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-xl" />
          <div className="h-9 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default SkeletonCard;
