import React, { useState, useEffect } from "react";

function Header() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  useEffect(() => {
    if (dark) {
      !document.body.classList.contains("dark") && document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.contains("dark") &&
        document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return (
    <header className="h-10 fixed right-3 top-3">
      <button
        className="mode outline-none focus:outline-none"
        onClick={() => setDark((dark) => !dark)}
      ></button>
    </header>
  );
}

export default Header;
