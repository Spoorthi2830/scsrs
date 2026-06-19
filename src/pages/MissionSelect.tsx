import { Link } from "react-router-dom";
import { useGame } from "../context/GameContext";
import NeoGridCity from "../components/NeoGridCity";
import GameHeader from "../components/GameHeader";

export default function MissionSelect() {
  const { unlockedLevel } = useGame();

  const missions = [
    {
      id: 1,
      name: "Signal Priority Recovery",
      description:
        "Restore corrupted traffic signal priorities across NeoGrid.",
      route: "/level1",
    },
    {
      id: 2,
      name: "Dependency Chain Restoration",
      description:
        "Bring critical systems online in the correct sequence.",
      route: "/level2",
    },
    {
      id: 3,
      name: "Network Reconstruction",
      description:
        "Reconnect communication hubs using minimum resources.",
      route: "/level3",
    },
    {
      id: 4,
      name: "Power Allocation Protocol",
      description:
        "Distribute limited energy across the city efficiently.",
      route: "/level4",
    },
    {
      id: 5,
      name: "Emergency Transmission Route",
      description:
        "Deliver the emergency signal through the fastest route.",
      route: "/level5",
    },
  ];

  return (
    <>
      <NeoGridCity />

      <div className="min-h-screen text-white relative z-10 p-8">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-6xl font-bold text-center text-cyan-300 mb-4">
            Mission Control
          </h1>

          <p className="text-center text-gray-300 mb-10">
            Select a recovery mission to rebuild NeoGrid.
          </p>

          <GameHeader />

          <div className="grid md:grid-cols-2 gap-6">

            {missions.map((mission) => {
              const active = mission.id === unlockedLevel;
              const unlocked = mission.id < unlockedLevel;

              return (
                <div
                  key={mission.id}
                  className="bg-black/60 backdrop-blur-md border border-cyan-400 rounded-2xl p-6 hover:scale-105 transition"
                >
                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-2xl font-bold">
                      Mission {mission.id}
                    </h2>

                    <span className="text-2xl">
                      {active ? "▶" : unlocked ? "🔓" : "🔒"}
                    </span>

                  </div>

                  <h3 className="text-cyan-300 text-lg mb-3">
                    {mission.name}
                  </h3>

                  <p className="text-gray-300 mb-6">
                    {mission.description}
                  </p>

                  {active ? (
                    <Link to={mission.route}>
                      <button className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-cyan-300">
                        Enter Mission
                      </button>
                    </Link>
                  ) : unlocked ? (
                    <Link to={mission.route}>
                      <button className="bg-green-500 text-black px-5 py-2 rounded-lg font-bold hover:bg-green-400">
                        Unlocked
                      </button>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-700 text-gray-400 px-5 py-2 rounded-lg"
                    >
                      Locked
                    </button>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </>
  );
}