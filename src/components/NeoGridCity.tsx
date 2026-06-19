import city from "../assets/neocity.png";
import { useGame } from "../context/GameContext";

export default function NeoGridCity() {
  const { cityProgress } = useGame();

  const darkness =
    cityProgress === 5
      ? 0
      : 0.95 - cityProgress * 0.2;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <img
        src={city}
        alt="NeoGrid City"
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 bg-black transition-all duration-1000"
        style={{
          opacity: darkness,
        }}
      />

      {cityProgress === 5 && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,255,0.15) 0%, transparent 70%)",
            animation: "pulseGlow 4s infinite",
          }}
        />
      )}

    </div>
  );
}