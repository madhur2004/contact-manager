import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ initialData, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        address: initialData.address || "",
      });
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const Input = ({ label, name, type = "text", placeholder }) => (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2.5 rounded-xl border text-sm
          bg-white dark:bg-gray-900
          text-gray-900 dark:text-white
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          ${
            errors[name]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-200 dark:border-gray-700"
          }
        `}
      />

      {errors[name] && <p className="text-xs text-red-500">{errors[name]}</p>}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex justify-center px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-lg
          bg-white dark:bg-gray-900
          border border-gray-100 dark:border-gray-800
          rounded-3xl shadow-xl
          p-6 md:p-8
          space-y-5
        "
      >
        {/* Header */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {initialData ? "Update Contact" : "Create New Contact"}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill the details below to save contact
          </p>
        </div>

        {/* Inputs */}
        <Input label="Name" name="name" placeholder="Enter full name" />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
        />
        <Input label="Phone" name="phone" placeholder="Enter phone number" />

        {/* Address */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Address
          </label>

          <textarea
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address (optional)"
            className="
              w-full px-4 py-2.5 rounded-xl border text-sm
              bg-white dark:bg-gray-900
              text-gray-900 dark:text-white
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-200
              border-gray-200 dark:border-gray-700
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full py-3 rounded-xl
            font-semibold text-white
            bg-linear-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700
            transition-all duration-300
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {isSubmitting
            ? "Saving..."
            : initialData
              ? "Update Contact"
              : "Create Contact"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
