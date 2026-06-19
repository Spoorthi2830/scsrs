import { createContext, useContext, useEffect, useState } from "react";

type GameContextType = {
  unlockedLevel: number;
  unlockLevel: (level: number) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlockedLevel, setUnlockedLevel] = useState(1);

  useEffect(() => {
    const saved = localStorage.getItem("neogrid-progress");

    if (saved) {
      setUnlockedLevel(Number(saved));
    }
  }, []);

  const unlockLevel = (level: number) => {
    setUnlockedLevel(level);
    localStorage.setItem(
      "neogrid-progress",
      String(level)
    );
  };

  return (
    <GameContext.Provider
      value={{
        unlockedLevel,
        unlockLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("GameContext missing");
  }

  return context;
}