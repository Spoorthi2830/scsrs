import { Link } from "react-router-dom";

export default function Level3() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl text-cyan-400 mb-8">
        LEVEL 3
      </h1>

      <Link to="/level4">
        <button className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-bold">
          Proceed to Level 4 →
        </button>
      </Link>
    </div>
  );
}