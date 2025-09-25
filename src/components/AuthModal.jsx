import { motion } from "framer-motion";

export default function AuthModal({ type, onClose }) {
return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-96 relative"
        >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          {type === "signup" && (
            <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
            >
            {type === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Footer text */}
        <p className="text-sm text-gray-500 text-center mt-4">
          {type === "login"
            ? "Don't have an account? Sign up!"
            : "Already have an account? Login!"}
        </p>
      </motion.div>
    </div>
  );
}