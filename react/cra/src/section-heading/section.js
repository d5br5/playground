import { useContext } from "react";
import { LevelContext } from "./level-context";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section
      className="section"
      style={{ border: "1px solid black", padding: 30 }}
    >
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
