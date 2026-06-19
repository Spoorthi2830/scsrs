import city from "../assets/neocity.png";

export default function NeoGridCity() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <img
        src={city}
        alt="NeoGrid City"
        className="w-full h-full object-cover"
      />

    </div>
  );
}