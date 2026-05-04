import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDeleteContact } from "../hooks/useDeleteContact";
import { Mail, Phone, MapPin } from "lucide-react";
const ContactCard = ({ contact }) => {
  const deleteContact = useDeleteContact();

  const handleDelete = (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteContact.mutate(contact._id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Content */}
      <Link to={`/contact/${contact._id}`} className="block">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
          {contact.name}
        </h3>

        <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <p className="flex items-center gap-2">
            <Mail size={16} className="text-blue-500" />
            <span className="truncate">{contact.email}</span>
          </p>

          <p className="flex items-center gap-2">
            <Phone size={16} className="text-green-500" />
            <span>{contact.phone}</span>
          </p>

          {contact.address && (
            <p className="flex items-start gap-2 text-gray-500 dark:text-gray-400">
              <MapPin size={16} className="mt-0.5 text-red-500" />
              <span className="line-clamp-2">{contact.address}</span>
            </p>
          )}
        </div>
      </Link>

      {/* Actions */}
      <div className="mt-5 flex gap-3">
        <Link
          to={`/edit/${contact._id}`}
          className="flex-1 text-center text-sm font-medium py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="flex-1 text-sm font-medium py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-all"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default ContactCard;
