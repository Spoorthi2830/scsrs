import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import NeoGridCity from "../components/NeoGridCity";

export default function Intro() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-red-500 text-2xl mb-8"
      >
        YEAR 2045
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="text-6xl font-bold text-cyan-400 text-center mb-8"
      >
        NeoGrid: The Last Engineer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
        className="max-w-3xl text-center"
      >
        <p className="text-xl text-gray-300 mb-4">
          SYSTEM FAILURE DETECTED
        </p>

        <p className="text-gray-400 mb-2">
          Traffic Networks Offline
        </p>

        <p className="text-gray-400 mb-2">
          Power Grid Unstable
        </p>

        <p className="text-gray-400 mb-10">
          Communication Systems Failing
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="w-40 h-40 rounded-full animate-pulse border-4 border-cyan-500 flex items-center justify-center text-cyan-400 text-2xl font-bold mb-8"
      >
        AURA
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 2 }}
        className="text-center max-w-2xl"
      >
        <TypewriterText
            text={`Engineer...

            NeoGrid is collapsing.

            Traffic systems are failing.

            Power distribution is unstable.

            Five recovery missions remain.

            I will guide you.`}
/>

        <Link to="/missions">
          <button className="px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold hover:scale-105 transition">
            BEGIN RESCUE MISSION
          </button>
        </Link>
      </motion.div>

    </div>
  );
}