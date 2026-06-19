import { createContext, useContext, useEffect, useState } from "react";

type GameContextType = {
  unlockedLevel: number;
  cityProgress: number;
  completeMission: (mission: number) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlockedLevel, setUnlockedLevel] = useState(1);
  const [cityProgress, setCityProgress] = useState(0);

  useEffect(() => {
    const savedLevel = localStorage.getItem(
      "neogrid-unlocked"
    );

    const savedCity = localStorage.getItem(
      "neogrid-city"
    );

    if (savedLevel) {
      setUnlockedLevel(Number(savedLevel));
    }

    if (savedCity) {
      setCityProgress(Number(savedCity));
    }
  }, []);

  const completeMission = (mission: number) => {
    const nextLevel = Math.max(
      unlockedLevel,
      mission + 1
    );

    const nextCity = Math.max(
      cityProgress,
      mission
    );

    setUnlockedLevel(nextLevel);
    setCityProgress(nextCity);

    localStorage.setItem(
      "neogrid-unlocked",
      String(nextLevel)
    );

    localStorage.setItem(
      "neogrid-city",
      String(nextCity)
    );
  };

  return (
    <GameContext.Provider
      value={{
        unlockedLevel,
        cityProgress,
        completeMission,
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