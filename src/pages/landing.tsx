import { Link } from "react-router-dom";

export default function Landing() {
  const levels = [
    {
      title: "LEVEL 1",
      desc: "Merge Sort + Inversion Count",
      route: "/level1",
      color: "border-cyan-500 text-cyan-400",
    },
    {
      title: "LEVEL 2",
      desc: "Topological Sort",
      route: "/level2",
      color: "border-green-500 text-green-400",
    },
    {
      title: "LEVEL 3",
      desc: "Kruskal MST",
      route: "/level3",
      color: "border-yellow-500 text-yellow-400",
    },
    {
      title: "LEVEL 4",
      desc: "0/1 Knapsack",
      route: "/level4",
      color: "border-purple-500 text-purple-400",
    },
    {
      title: "LEVEL 5",
      desc: "Dijkstra Shortest Path",
      route: "/level5",
      color: "border-red-500 text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-24 px-6">
        <h1 className="text-7xl font-bold text-cyan-400 mb-4 tracking-wider">
          SCSRS
        </h1>

        <p className="text-xl text-gray-300 text-center max-w-3xl mb-8">
          Smart City Signal Recovery System
        </p>

        <p className="text-gray-400 text-center max-w-2xl mb-10">
          Restore the damaged smart-city network through five critical
          recovery protocols. Complete each algorithmic mission to bring
          the city back online.
        </p>

        <Link to="/level1">
          <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 hover:scale-105 transition duration-300">
            🚀 START MISSION
          </button>
        </Link>
      </div>

      {/* Levels Section */}
      <div className="px-8 pb-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Mission Levels
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level) => (
            <Link key={level.title} to={level.route}>
              <div
                className={`h-full border-2 ${level.color}
                rounded-2xl p-6 bg-gray-900
                hover:scale-105 transition duration-300
                cursor-pointer shadow-lg`}
              >
                <h3 className="text-2xl font-bold mb-4">
                  {level.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {level.desc}
                </p>

                <div className="text-sm text-gray-400">
                  Status: Ready 🚀
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}