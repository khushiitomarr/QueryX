import { useState } from "react";
import Logo from "./components/Logo";
import SearchBox from "./components/SearchBox";
import AuthModal from "./components/AuthModal";
import { motion } from "framer-motion";

function App() {
  const [modalType, setModalType] = useState(null); // "login" | "signup" | null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-6 relative">
      
      {/* Header with Login/Signup */}
      <div className="absolute top-6 right-6 flex space-x-3">
        <button
          onClick={() => setModalType("login")}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          Login
        </button>
        <button
          onClick={() => setModalType("signup")}
          className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow"
        >
          Sign Up
        </button>
      </div>

      <Logo />
      <SearchBox />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 text-gray-500 text-sm flex flex-col items-center space-y-1"
      >
        
        <p>© {new Date().getFullYear()} QueryX · Privacy · Terms · About</p>
        <p> · Privacy · Terms · About</p>
      </motion.footer>

      {/* Modal */}
      {modalType && (
        <AuthModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </div>
  );
}

export default App;