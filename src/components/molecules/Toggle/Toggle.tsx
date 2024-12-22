import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import styles from "./Toggle.module.css";
import clsx from "clsx";

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Update document class and local storage when mode changes
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="toggle"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <label htmlFor="toggle" className={styles.checkboxLabel}>
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
          aria-label="Dark Mode Toggle"
        ></span>
      </label>
    </div>
  );
};
