import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

import { motion } from "framer-motion";

import {
  ZONES,
  OPTIMAL_SET,
  TOTAL_ENERGY,
  TOTAL_BENEFIT,
  FINAL_CODE,
} from "../data/knapsackData";

import GameHeader from "../components/GameHeader";
import NeoGridCity from "../components/NeoGridCity";

export default function Level4() {
  const { completeMission } = useGame();

  const [showComplete, setShowComplete] = useState(false);

  const navigate = useNavigate();

  if (showComplete) {
    return (
      <>
        <NeoGridCity />

        <div className="min-h-screen flex items-center justify-center relative z-10">

          <div className="bg-black/50 backdrop-blur-md border border-purple-500 rounded-2xl p-10 text-center">

            <h1 className="text-5xl text-green-400 font-bold mb-4">
              ✓ Mission Complete
            </h1>

            <p className="text-cyan-300 text-xl">
              Power Grid Restored
            </p>

            <p className="mt-4 text-gray-300">
              NeoGrid Recovery +80%
            </p>

          </div>

        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-purple-950 text-white p-8">
      <GameHeader />

      <h1 className="text-5xl text-purple-400 font-bold text-center mb-8">
        LEVEL 4
      </h1>

      <h2 className="text-2xl text-purple-300 text-center mb-10">
        The Grid of Vital Energy
      </h2>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {ZONES.map((zone) => (
          <div
            key={zone.zone}
            className="bg-gray-900 border border-purple-500 rounded-xl p-5"
          >
            <h3 className="text-2xl text-purple-400 font-bold">
              Zone {zone.zone}
            </h3>

            <p>Cost: {zone.cost}</p>
            <p>Benefit: {zone.benefit}</p>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 border border-green-500 rounded-xl p-6 mb-8"
      >
        <h3 className="text-2xl text-green-400 font-bold mb-4">
          Optimal Solution
        </h3>

        <p className="text-xl">
          {OPTIMAL_SET.join(" , ")}
        </p>

        <p className="mt-4">
          Total Energy: {TOTAL_ENERGY}
        </p>

        <p>
          Total Benefit: {TOTAL_BENEFIT}
        </p>
      </motion.div>

      <div className="bg-gradient-to-r from-purple-900 to-cyan-900 rounded-xl p-8 text-center mb-10">
        <h2 className="text-4xl font-bold text-cyan-300 mb-3">
          FINAL UNLOCK CODE
        </h2>

        <p className="text-6xl font-bold">
          {FINAL_CODE}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            completeMission(4);

            setShowComplete(true);

            setTimeout(() => {
              navigate("/level5");
            }, 2000);
          }}
          className="px-8 py-3 bg-purple-500 text-black font-bold rounded-xl hover:scale-105 transition"
        >
          Proceed to Level 5 →
        </button>
      </div>

    </div>
  );
}