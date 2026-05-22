import { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggle: () => void;
  isDark: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggle: () => {},
  isDark: false,
});

export function useThemeContext() {
  return useContext(ThemeContext);
}
