import { AppConfig } from "@/configs/app.config";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    console.log("[Theme] Saved theme from localStorage:", saved);

    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      //   document.documentElement.classList.add(saved);
      document.documentElement.setAttribute("data-theme", saved);
      console.log("[Theme] Using saved theme:", saved);
    } else if (
      AppConfig.forceDefaultTheme === "light" ||
      AppConfig.forceDefaultTheme === "dark"
    ) {
      setTheme(AppConfig.forceDefaultTheme);
      //   document.documentElement.classList.add(AppConfig.forceDefaultTheme);
      document.documentElement.setAttribute(
        "data-theme",
        AppConfig.forceDefaultTheme
      );
      console.log(
        "[Theme] Using forced theme from config:",
        AppConfig.forceDefaultTheme
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const systemTheme: Theme = prefersDark ? "dark" : "light";
      setTheme(systemTheme);
      //   document.documentElement.classList.add(systemTheme);
      document.documentElement.setAttribute("data-theme", systemTheme);
      console.log(
        "[Theme] No saved/config theme, using system preference:",
        systemTheme
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // document.documentElement.classList.remove(theme);
    // document.documentElement.classList.add(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    console.log("[Theme] Theme toggled to:", newTheme);
  };

  return { theme, toggleTheme };
};
