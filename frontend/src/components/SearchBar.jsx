import { motion } from "framer-motion";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  return (
    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full mb-8"
    >
      <form
        onSubmit={handleSubmit}
        className="
          flex items-center gap-2
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          px-3 py-2
          shadow-sm hover:shadow-md
          transition-all duration-200
        "
      >
        {/* Search Icon */}
        <span className="text-gray-400 text-lg px-2">🔍</span>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search contacts by name, email..."
          className="
            flex-1 bg-transparent
            text-sm md:text-base
            text-gray-900 dark:text-white
            placeholder-gray-400
            focus:outline-none
          "
        />

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="
              text-xs md:text-sm
              px-3 py-1.5
              rounded-lg
              bg-gray-100 dark:bg-gray-800
              text-gray-600 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
          >
            Clear
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="
            px-4 py-2
            rounded-xl
            text-sm font-medium
            text-white
            bg-linear-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            transition-all
          "
        >
          Search
        </button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
