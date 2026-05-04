import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContacts } from "../hooks/useContacts";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import SkeletonCard from "../components/SkeletonCard";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 6;

  const { data, isLoading, isError, error } = useContacts(page, limit, search);

  const contacts = data?.contacts || [];

  if (isError) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 dark:text-red-400 text-lg font-medium">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1
          className="
          text-2xl sm:text-3xl font-bold
          text-gray-900 dark:text-white
        "
        >
          Your Contacts
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage, search and organize your contacts easily
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <SearchBar
          onSearch={(term) => {
            setSearch(term);
            setPage(1);
          }}
        />
      </div>

      {/* Content */}
      {isLoading ? (
        <div
          className="
          grid gap-6
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        "
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : contacts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20 space-y-3"
        >
          <div className="text-5xl">📭</div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No contacts found
          </p>
          <p className="text-sm text-gray-400">
            Try creating your first contact
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            grid gap-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          <AnimatePresence>
            {contacts.map((contact) => (
              <ContactCard key={contact._id} contact={contact} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Pagination */}
      {data?.pagination && contacts.length > 0 && (
        <div className="pt-6">
          <Pagination
            currentPage={data.pagination.page}
            totalPages={data.pagination.pages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default HomePage;
