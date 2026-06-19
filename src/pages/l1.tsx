import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { INITIAL_STATIONS, STATION_SIGNALS } from "../data/stations";
import { countInversions } from "../algorithms/mergeSort";

import { useGame } from "../context/GameContext";

const { completeMission } = useGame();

export default function Level1() {
  const values = INITIAL_STATIONS.map(
    (station) =>
      STATION_SIGNALS[station as keyof typeof STATION_SIGNALS]
  );

  const inversionCount = countInversions(values);

  const sortedStations = [...INITIAL_STATIONS].sort(
    (a, b) =>
      STATION_SIGNALS[a as keyof typeof STATION_SIGNALS] -
      STATION_SIGNALS[b as keyof typeof STATION_SIGNALS]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white p-8">
      <h1 className="text-5xl text-cyan-400 font-bold mb-8 text-center">
        LEVEL 1
      </h1>

      <h2 className="text-2xl text-cyan-300 mb-4">
        Station Signals
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10"
      >
        {INITIAL_STATIONS.map((station) => (
          <div
            key={station}
            className="bg-gray-900 border border-cyan-500 rounded-xl p-4 text-center hover:scale-105 transition"
          >
            <h3 className="text-cyan-400 font-bold">
              {station}
            </h3>

            <p>
              {
                STATION_SIGNALS[
                  station as keyof typeof STATION_SIGNALS
                ]
              }
            </p>
          </div>
        ))}
      </motion.div>

      <div className="bg-gray-900 border border-yellow-500 rounded-xl p-6 mb-8">
        <h2 className="text-2xl text-yellow-400 font-bold">
          Signal Disorder Index
        </h2>

        <p className="text-4xl mt-3">
          {inversionCount}
        </p>
      </div>

      <div className="bg-gray-900 border border-green-500 rounded-xl p-6 mb-10">
        <h2 className="text-2xl text-green-400 font-bold mb-4">
          Sorted Order
        </h2>

        <div className="flex flex-wrap gap-3">
          {sortedStations.map((station) => (
            <div
              key={station}
              className="px-4 py-2 bg-green-900 rounded-lg"
            >
              {station}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/level2"
  onClick={() => completeMission(1)}>
          <button className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:scale-105 transition">
            Proceed to Level 2 →
            
          </button>
        </Link>
      </div>
    </div>
  );
}