"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const dark = "dark";
const light = "light";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute={"class"}
      defaultTheme="system"
      value={{ dark, light }}
    >
      {children}
    </NextThemeProvider>
  );
};
