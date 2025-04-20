// components/ContactForm.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../Button";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    company: string;
    message?: string;
  }) => void;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
}

const ContactForm = ({
  onSubmit,
  isSubmitting,
  submitStatus,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    company: false,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    tap: { scale: 0.98 },
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = () => {
    // Validate inputs
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
    };

    setErrors(newErrors);

    // If no errors, proceed with submission
    if (!Object.values(newErrors).some(Boolean)) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="grow flex items-center h-screen relative"
    >
      <div className="w-[95vw] md:w-3/7 text-center mx-auto">
        <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-5">
          You're just one step away!
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl mb-12">
          Fill out the form to get complete details and pricing.
        </motion.p>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-green-100 text-green-800 rounded"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 p-4 bg-red-100 text-red-800 rounded"
          >
            Something went wrong. Please try again later.
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-5"
        >
          <motion.div
            variants={itemVariants}
            animate={errors.name ? "shake" : "visible"}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 h-12 bg-white text-[#242424] border-box border ${
                errors.name ? "border-[#F85B4C] placeholder-[#F85B4C]" : ""
              }`}
              type="text"
              placeholder="Your name*"
              required
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={errors.email ? "shake" : "visible"}
          >
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 h-12 bg-white text-[#242424] border-box border ${
                errors.email ? "border-[#F85B4C] placeholder-[#F85B4C]" : ""
              }`}
              type="email"
              placeholder="Email*"
              required
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={errors.company ? "shake" : "visible"}
          >
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`w-full p-3 h-12 bg-white text-[#242424] border-box border ${
                errors.company ? "border-[#F85B4C] placeholder-[#F85B4C]" : ""
              }`}
              type="text"
              placeholder="Company name*"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="primary"
              title={isSubmitting ? "Sending..." : "Submit"}
              class="w-full cursor-pointer"
              onClick={handleSubmit}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
