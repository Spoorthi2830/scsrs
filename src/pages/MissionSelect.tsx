import { Link } from "react-router-dom";
import { useGame } from "../context/GameContext";
import NeoGridCity from "../components/NeoGridCity"; 

export default function MissionSelect() {
  const { unlockedLevel , cityProgress } = useGame();

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
    {/*    <NeoGridCity progress={cityProgress} /> */}

    <div className="min-h-screen text-white p-8 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">
          Mission Control
        </h1>
       

        <p className="text-gray-300 max-w-3xl mx-auto">
          AURA has identified five critical recovery missions.
          Complete them in sequence to restore NeoGrid.
        </p>

        <div className="mt-6 text-cyan-300">
          Current Clearance Level: {unlockedLevel}
          <div className="mt-8 bg-gray-900 rounded-xl p-6 border border-cyan-500">

  <h2 className="text-2xl text-cyan-400 mb-4">
    NeoGrid Status
  </h2>

  <div className="space-y-3">

    <div>
      Traffic Systems:
      {cityProgress >= 1 ? " ✅" : " ❌"}
    </div>

    <div>
      Communications:
      {cityProgress >= 2 ? " ✅" : " ❌"}
    </div>

    <div>
      Network Links:
      {cityProgress >= 3 ? " ✅" : " ❌"}
    </div>

    <div>
      Power Grid:
      {cityProgress >= 4 ? " ✅" : " ❌"}
    </div>

    <div>
      NeoGrid Core:
      {cityProgress >= 5 ? " ✅" : " ❌"}
    </div>

  </div>

</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {missions.map((mission) => {
          const unlocked = mission.id <= unlockedLevel;

          return (
            <div
              key={mission.id}
             className={`rounded-2xl p-6 border transition duration-300 backdrop-blur-md
                ${
                unlocked
                    ? "border-cyan-500 bg-black/50 hover:scale-105"
                    : "border-gray-700 bg-black/70 opacity-70"
                }`}
            >
              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold">
                  Mission {mission.id}
                </h2>

                <span className="text-2xl">
                  {unlocked ? "🔓" : "🔒"}
                </span>

              </div>

              <h3 className="text-cyan-300 text-lg mb-3">
                {mission.name}
              </h3>

              <p className="text-gray-400 mb-6">
                {mission.description}
              </p>

              {unlocked ? (
                <Link to={mission.route}>
                  <button className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-bold hover:bg-cyan-400">
                    Enter Mission
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className="bg-gray-700 px-5 py-2 rounded-lg"
                >
                  Locked
                </button>
              )}

            </div>
          );
        })}

      </div>
    </div>
  </>);
}