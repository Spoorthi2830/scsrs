import { motion } from "framer-motion";

import {
  SHORTEST_PATH,
  MIN_COST,
  ACCESS_CODE,
  PATH_EDGES,
} from "../data/dijkstraData";

export default function Level5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-red-950 text-white p-8">

      <h1 className="text-5xl text-red-400 font-bold text-center mb-8">
        LEVEL 5
      </h1>

      <h2 className="text-2xl text-red-300 text-center mb-10">
        Critical Route Recovery
      </h2>

      <div className="bg-gray-900 border border-red-500 rounded-xl p-6 mb-8">
        <h3 className="text-2xl text-red-400 font-bold mb-4">
          Shortest Path
        </h3>

        <p className="text-3xl">
          {SHORTEST_PATH.join(" → ")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {PATH_EDGES.map((edge) => (
          <div
            key={edge}
            className="bg-red-900 rounded-xl p-4 text-center"
          >
            {edge}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8"
      >
        <h3 className="text-2xl text-yellow-400 font-bold">
          Minimum Cost
        </h3>

        <p className="text-5xl mt-4">
          {MIN_COST}
        </p>
      </motion.div>

      <div className="bg-gradient-to-r from-red-900 to-cyan-900 rounded-xl p-10 text-center">
        <h2 className="text-4xl font-bold text-cyan-300 mb-4">
          SYSTEM ACCESS CODE
        </h2>

        <p className="text-7xl font-bold">
          {ACCESS_CODE}
        </p>

        <p className="mt-6 text-lg text-gray-200">
          CRITICAL ROUTE RESTORED
        </p>
      </div>

    </div>
  );
}