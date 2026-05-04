import { motion } from "framer-motion";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const btnBase =
    "px-3 sm:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200";

  const inactiveBtn =
    "border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800";

  const activeBtn =
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md";

  const disabledBtn = "opacity-40 cursor-not-allowed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-2 mt-10"
    >
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${btnBase} ${inactiveBtn} ${
          currentPage === 1 ? disabledBtn : ""
        }`}
      >
        ← Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {getPageNumbers().map((page, index) => {
          const isActive = page === currentPage;

          return (
            <button
              key={index}
              onClick={() => typeof page === "number" && onPageChange(page)}
              disabled={page === "..."}
              className={`
                ${btnBase}
                ${
                  page === "..."
                    ? "cursor-default text-gray-400 px-2"
                    : isActive
                      ? activeBtn
                      : inactiveBtn
                }
              `}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${btnBase} ${inactiveBtn} ${
          currentPage === totalPages ? disabledBtn : ""
        }`}
      >
        Next →
      </button>
    </motion.div>
  );
};

export default Pagination;
