"use client";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = function () {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") document.documentElement.classList.add("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="flex items-center gap-2 font-medium"
      onClick={toggleTheme}
    >
      <span>{theme === "dark" ? <FaMoon /> : <FaSun />}</span>
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}

export default ThemeSwitch;
