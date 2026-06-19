import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { INITIAL_STATIONS } from "../data/stations";
import { topologicalSort } from "../algorithms/topologicalSort";

import { useGame } from "../context/GameContext";

import GameHeader from "../components/GameHeader";
import NeoGridCity from "../components/NeoGridCity";

export default function Level2() {
  const { completeMission } = useGame();

  const [showComplete, setShowComplete] = useState(false);

  const navigate = useNavigate();

  const order = topologicalSort();

  const stationOrder = order.map(
    (index) => INITIAL_STATIONS[index]
  );

  if (showComplete) {
    return (
      <>
        <NeoGridCity />

        <div className="min-h-screen flex items-center justify-center relative z-10">

          <div className="bg-black/50 backdrop-blur-md border border-green-500 rounded-2xl p-10 text-center">

            <h1 className="text-5xl text-green-400 font-bold mb-4">
              ✓ Mission Complete
            </h1>

            <p className="text-cyan-300 text-xl">
              Communications Restored
            </p>

            <p className="mt-4 text-gray-300">
              NeoGrid Recovery +40%
            </p>

          </div>

        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-green-950 text-white p-8">
      <GameHeader />

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
        <h3 className="text-2xl text-green-400 font-bold mb-4">
          AI Dependency Resolution Protocol
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
        <h3 className="text-2xl text-cyan-400 font-bold mb-4">
          Recovery Execution Chain
        </h3>

        <p className="text-lg">
          {stationOrder.join(" → ")}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            completeMission(2);

            setShowComplete(true);

            setTimeout(() => {
              navigate("/level3");
            }, 2000);
          }}
          className="px-8 py-3 bg-green-500 text-black font-bold rounded-xl hover:scale-105 transition"
        >
          Proceed to Level 3 →
        </button>
      </div>

    </div>
  );
}