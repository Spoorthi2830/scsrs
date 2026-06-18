import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { MST_COST, BINARY_KEY, MST_EDGES } from "../data/weightedMatrix";

export default function Level3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-yellow-950 text-white p-8">

      <h1 className="text-5xl text-yellow-400 font-bold text-center mb-8">
        LEVEL 3
      </h1>

      <h2 className="text-2xl text-yellow-300 text-center mb-10">
        Network Reconstruction Protocol
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-6 mb-10"
      >
        <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Restoration Cost
          </h3>

          <p className="text-5xl font-bold">
            {MST_COST}
          </p>
        </div>

        <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            Binary Recovery Key
          </h3>

          <p className="text-5xl font-bold">
            {BINARY_KEY}
          </p>
        </div>
      </motion.div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6 mb-10">
        <h3 className="text-2xl text-green-400 font-bold mb-6">
          MST Edge Selection
        </h3>

        <div className="grid md:grid-cols-3 gap-3">
          {MST_EDGES.map((edge) => (
            <div
              key={edge}
              className="bg-green-900 rounded-lg p-3 text-center"
            >
              {edge}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900 to-cyan-900 rounded-xl p-8 text-center mb-10">
        <h2 className="text-4xl font-bold text-green-300 mb-3">
          SMART GRID STABILIZED
        </h2>

        <p className="text-lg text-gray-200">
          Minimum Spanning Tree successfully restored the city network.
        </p>
      </div>

      <div className="flex justify-center">
        <Link to="/level4">
          <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition">
            Proceed to Level 4 →
          </button>
        </Link>
      </div>

    </div>
  );
}