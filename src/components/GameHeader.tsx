import { useGame } from "../context/GameContext";

export default function GameHeader() {
  const { cityProgress } = useGame();

  return (
    <div className="mb-8">

      <div className="
        bg-cyan-500/10
        backdrop-blur-md
        border border-cyan-400/40
        rounded-2xl
        p-5
      ">

        <div className="flex justify-between items-center mb-4">

          <div>
            <h2 className="text-cyan-300 text-sm">
              AURA COMMAND INTERFACE
            </h2>

            <h1 className="text-2xl font-bold text-white">
              NeoGrid Recovery
            </h1>
          </div>

          <div className="text-cyan-300 text-xl">
            {cityProgress * 20}%
          </div>

        </div>

        <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">

          <div
            className="
              h-full
              bg-cyan-400
              transition-all
              duration-1000
            "
            style={{
              width: `${cityProgress * 20}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}