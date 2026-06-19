import { useGame } from "../context/GameContext";

export default function GameHeader() {
  const { cityProgress } = useGame();

  return (
    <div className="mb-8 bg-black/60 backdrop-blur-md border border-cyan-500 rounded-xl p-4">
      <div className="flex justify-between mb-2">
        <span className="text-cyan-300 font-bold">
          NeoGrid Recovery
        </span>

        <span className="text-cyan-300">
          {cityProgress * 20}%
        </span>
      </div>

      <div className="w-full bg-gray-800 rounded-full h-4">
        <div
          className="bg-cyan-400 h-4 rounded-full transition-all duration-1000"
          style={{
            width: `${cityProgress * 20}%`,
          }}
        />
      </div>
    </div>
  );
}