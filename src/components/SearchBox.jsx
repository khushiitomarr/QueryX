import { useState, useEffect, useRef } from "react";
import { Search, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check if SpeechRecognition is available
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setListening(false);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  const handleVoiceSearch = () => {
    if (recognitionRef.current) {
      if (!listening) {
        setListening(true);
        recognitionRef.current.start();
      } else {
        recognitionRef.current.stop();
        setListening(false);
      }
    } else {
      alert("Voice recognition not supported in this browser ❌");
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center w-full max-w-2xl bg-white shadow-lg rounded-full overflow-hidden border border-gray-200"
    >
      <input
        type="text"
        placeholder="Search the web..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-6 py-4 text-lg border-0 focus-visible:ring-0 focus:outline-none"
      />

      {/* Mic button */}
      <button
        onClick={handleVoiceSearch}
        className={`px-4 py-4 ${listening ? "text-red-500" : "text-gray-500 hover:text-blue-600"}`}
      >
        <Mic className="w-5 h-5" />
      </button>

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-4"
      >
        <Search className="w-5 h-5" />
      </button>
    </motion.div>
  );
}