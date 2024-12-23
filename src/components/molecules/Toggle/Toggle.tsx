import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import styles from "./Toggle.module.css";
import clsx from "clsx";

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div>
      <label htmlFor="toggle" className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="toggle"
          aria-label="Dark Mode Toggle"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsDarkMode(!isDarkMode);
              e.preventDefault();
            }
          }}
        />
        <MoonIcon
          className={clsx(styles.moonIcon, { [styles.active]: isDarkMode })}
        />
        <SunIcon
          className={clsx(styles.sunIcon, { [styles.active]: !isDarkMode })}
        />
        <span
          className={clsx(styles.ball, {
            [styles.animation]: isDarkMode,
          })}
        ></span>
      </label>
    </div>
  );
};
