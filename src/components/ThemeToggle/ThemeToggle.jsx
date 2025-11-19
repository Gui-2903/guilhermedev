import React from "react";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button className={styles.wrapper} onClick={toggle} aria-label="Toggle theme">
      <div className={styles.icon} data-theme={theme === "dark" ? "dark" : "light"}>
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </button>
  );
}
