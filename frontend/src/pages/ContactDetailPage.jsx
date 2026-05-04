import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContact } from "../hooks/useContact";
import SkeletonCard from "../components/SkeletonCard";

const ContactDetailPage = () => {
  const { id } = useParams();
  const { data: contact, isLoading, isError, error } = useContact(id);

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto">
        <SkeletonCard />
      </div>
    );
  }

  if (isError || !contact) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 dark:text-red-400 text-lg font-medium">
          {error?.message || "Contact not found"}
        </p>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      {/* Card */}
      <div
        className="
        bg-white dark:bg-gray-900
        border border-gray-100 dark:border-gray-800
        rounded-3xl
        shadow-xl
        p-6 sm:p-8
      "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {contact.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Contact Details
            </p>
          </div>

          <span
            className="
            text-xs px-3 py-1 rounded-full
            bg-green-100 text-green-700
            dark:bg-green-900 dark:text-green-300
          "
          >
            Active
          </span>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div
            className="
            p-4 rounded-2xl
            bg-gray-50 dark:bg-gray-800
          "
          >
            <p className="text-gray-500 dark:text-gray-400 mb-1">Email</p>
            <p className="text-gray-900 dark:text-white font-medium break-all">
              📧 {contact.email}
            </p>
          </div>

          <div
            className="
            p-4 rounded-2xl
            bg-gray-50 dark:bg-gray-800
          "
          >
            <p className="text-gray-500 dark:text-gray-400 mb-1">Phone</p>
            <p className="text-gray-900 dark:text-white font-medium">
              📞 {contact.phone}
            </p>
          </div>

          {contact.address && (
            <div
              className="
              sm:col-span-2
              p-4 rounded-2xl
              bg-gray-50 dark:bg-gray-800
            "
            >
              <p className="text-gray-500 dark:text-gray-400 mb-1">Address</p>
              <p className="text-gray-900 dark:text-white font-medium">
                📍 {contact.address}
              </p>
            </div>
          )}

          <div
            className="
            sm:col-span-2
            p-4 rounded-2xl
            bg-gray-50 dark:bg-gray-800
          "
          >
            <p className="text-gray-500 dark:text-gray-400 mb-1">Created At</p>
            <p className="text-gray-900 dark:text-white font-medium">
              {new Date(contact.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            to={`/edit/${contact._id}`}
            className="
              flex-1 text-center
              px-4 py-3 rounded-2xl
              font-medium text-white
              bg-linear-to-r from-amber-500 to-orange-500
              hover:from-amber-600 hover:to-orange-600
              transition-all
            "
          >
            Edit Contact
          </Link>

          <Link
            to="/"
            className="
              flex-1 text-center
              px-4 py-3 rounded-2xl
              font-medium
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetailPage;
