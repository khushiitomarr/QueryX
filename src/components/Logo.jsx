import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-extrabold text-gray-800 mb-10"
    >
    QueryX
    </motion.h1>
  );
}