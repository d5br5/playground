"use client";
import { useTheme } from "next-themes";
import * as style from "./style.css";

export const ThemeSwitch = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <div className={style.lightLabel}>current theme is light</div>
      <div className={style.darkLabel}>current theme is dark</div>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
