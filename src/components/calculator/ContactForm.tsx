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
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.6 },
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
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
    };
    setErrors(newErrors);
    if (!Object.values(newErrors).some(Boolean)) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="grow flex items-center h-screen relative"
    >
      <div className="w-[95vw] md:w-3/7 text-center mx-auto">
        {/* Title - appears first */}
        <motion.h1 variants={item} className="text-3xl font-bold mb-5">
          You're just one step away!
        </motion.h1>

        {/* Subtitle - appears second */}
        <motion.p variants={item} className="text-xl mb-12">
          Fill out the form to get complete details and pricing.
        </motion.p>

        {/* Status messages - appears third */}
        {submitStatus === "success" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={item}
            className="mb-6 p-4 bg-green-100 text-green-800 rounded"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={item}
            className="mb-6 p-4 bg-red-100 text-red-800 rounded"
          >
            Something went wrong. Please try again later.
          </motion.div>
        )}

        {/* Form fields - each appears in sequence */}
        <motion.div variants={container} className="flex flex-col gap-5">
          {/* Name input - appears fourth */}
          <motion.div variants={item}>
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
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#F85B4C] text-sm text-left mt-1"
              >
                Please enter your name
              </motion.p>
            )}
          </motion.div>

          {/* Email input - appears fifth */}
          <motion.div variants={item}>
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
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#F85B4C] text-sm text-left mt-1"
              >
                Please enter a valid email
              </motion.p>
            )}
          </motion.div>

          {/* Company input - appears sixth */}
          <motion.div variants={item}>
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
            {errors.company && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#F85B4C] text-sm text-left mt-1"
              >
                Please enter your company name
              </motion.p>
            )}
          </motion.div>

          {/* Submit button - appears last */}
          <motion.div variants={item}>
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
