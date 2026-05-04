import { useParams, useNavigate } from "react-router-dom";
import { useContact } from "../hooks/useContact";
import { useCreateContact } from "../hooks/useCreateContact";
import { useUpdateContact } from "../hooks/useUpdateContact";
import ContactForm from "../components/ContactForm";
import SkeletonCard from "../components/SkeletonCard";
import { motion } from "framer-motion";

const CreateEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const { data: contact, isLoading } = useContact(id, {
    enabled: isEditMode,
  });

  const createContact = useCreateContact();
  const updateContact = useUpdateContact();

  const handleSubmit = (formData) => {
    if (isEditMode) {
      updateContact.mutate(
        { id, data: formData },
        {
          onSuccess: () => navigate(`/contact/${id}`),
        },
      );
    } else {
      createContact.mutate(formData, {
        onSuccess: (response) => navigate(`/contact/${response.data.data._id}`),
      });
    }
  };

  const isSubmitting = createContact.isPending || updateContact.isPending;

  if (isEditMode && isLoading) {
    return (
      <div className="max-w-lg mx-auto mt-10">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1
          className="
          text-2xl sm:text-3xl font-bold
          text-gray-900 dark:text-white
        "
        >
          {isEditMode ? "Edit Contact" : "Create New Contact"}
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {isEditMode
            ? "Update contact information below"
            : "Add a new contact to your workspace"}
        </p>
      </div>

      {/* Card Wrapper */}
      <div
        className="
        bg-white dark:bg-gray-900
        border border-gray-100 dark:border-gray-800
        rounded-3xl
        shadow-xl
        p-5 sm:p-8
      "
      >
        <ContactForm
          initialData={contact}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Footer Hint */}
      <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
        Press submit to save changes securely
      </p>
    </motion.div>
  );
};

export default CreateEditPage;
