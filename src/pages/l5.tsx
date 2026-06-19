import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

import { motion } from "framer-motion";

import {
  SHORTEST_PATH,
  MIN_COST,
  ACCESS_CODE,
  PATH_EDGES,
} from "../data/dijkstraData";

import GameHeader from "../components/GameHeader";
import NeoGridCity from "../components/NeoGridCity";

export default function Level5() {
  const { completeMission } = useGame();

  const [showComplete, setShowComplete] = useState(false);

  const navigate = useNavigate();

  if (showComplete) {
    return (
      <>
        <NeoGridCity />

        <div className="min-h-screen flex items-center justify-center relative z-10">

          <div className="bg-black/50 backdrop-blur-md border border-cyan-500 rounded-2xl p-10 text-center">

            <h1 className="text-6xl text-green-400 font-bold mb-6">
              ✓ MISSION COMPLETE
            </h1>

            <p className="text-3xl text-cyan-300 mb-4">
              NeoGrid Fully Restored
            </p>

            <p className="text-xl text-gray-300 mb-8">
              Recovery 100%
            </p>

            <div className="text-lg text-cyan-200">
              AURA: All critical systems online.
            </div>

            <div className="mt-4 text-gray-300">
              The city has been saved.
            </div>

          </div>

        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-red-950 text-white p-8">
      <GameHeader />

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

        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              completeMission(5);

              setShowComplete(true);

              setTimeout(() => {
                navigate("/missions");
              }, 3000);
            }}
            className="px-8 py-3 bg-red-500 text-black font-bold rounded-xl hover:scale-105 transition"
          >
            Restore NeoGrid →
          </button>
        </div>

      </div>

    </div>
  );
}