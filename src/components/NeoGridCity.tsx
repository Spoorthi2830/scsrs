import city from "../assets/neocity.png";

type Props = {
  progress: number;
};

export default function NeoGridCity({
  progress,
}: Props) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Background City */}
      <img
        src={city}
        alt="NeoGrid"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Mission 1 - Traffic */}
      {progress >= 1 && (
        <>
          <div className="traffic-car car1">🚗</div>
          <div className="traffic-car car2">🚗</div>
        </>
      )}

      {/* Mission 2 - Signal Towers */}
      {progress >= 2 && (
        <>
          <div className="signal signal1"></div>
          <div className="signal signal2"></div>
        </>
      )}

      {/* Mission 3 - Network Links */}
      {progress >= 3 && (
        <>
          <div className="network-line line1"></div>
          <div className="network-line line2"></div>
          <div className="network-line line3"></div>
        </>
      )}

      {/* Mission 4 - Power Glow */}
      {progress >= 4 && (
        <div className="power-glow"></div>
      )}

      {/* Mission 5 - Airships */}
      {progress >= 5 && (
        <>
          <div className="airship ship1">🛸</div>
          <div className="airship ship2">🛸</div>
        </>
      )}

    </div>
  );
}