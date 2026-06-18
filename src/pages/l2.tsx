import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { INITIAL_STATIONS } from "../data/stations";
import { topologicalSort } from "../algorithms/topologicalSort";

export default function Level2() {
  const order = topologicalSort();

  const stationOrder = order.map(
    (index) => INITIAL_STATIONS[index]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-green-950 text-white p-8">

      <h1 className="text-5xl text-green-400 font-bold text-center mb-8">
        LEVEL 2
      </h1>

      <h2 className="text-2xl text-green-300 mb-6">
        Dependency Resolution
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 border border-green-500 rounded-xl p-6 mb-8"
      >
        <h3 className="text-xl font-bold mb-4">
          Topological Order
        </h3>

        <div className="flex flex-wrap gap-3">
          {stationOrder.map((station) => (
            <div
              key={station}
              className="bg-green-900 px-4 py-2 rounded-lg"
            >
              {station}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">
          Resolution Sequence
        </h3>

        <p className="text-lg">
          {stationOrder.join(" → ")}
        </p>
      </div>

      <div className="flex justify-center">
        <Link to="/level3">
          <button className="px-8 py-3 bg-green-500 text-black font-bold rounded-xl hover:scale-105 transition">
            Proceed to Level 3 →
          </button>
        </Link>
      </div>

    </div>
  );
}