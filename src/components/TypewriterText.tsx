import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
};

export default function TypewriterText({
  text,
  speed = 40,
}: Props) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="text-lg text-cyan-200 whitespace-pre-line">
      {displayedText}
    </p>
  );
}