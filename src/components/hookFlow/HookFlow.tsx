import React, { useEffect, useState } from "react";

const HookFlow = () => {
  const [colorMode, setColorMode] = useState<string>(localStorage.getItem('colorMode') || 'dark');

  useEffect(() => {
    localStorage.setItem("colorMode", colorMode )
  }, [colorMode])

  return (
    <div
      style={{ height: "100vh" }}
      className={colorMode === "dark" ? "bg-dark" : "bg-light"}
    >
      <div className="p-5 h-100">
        {colorMode === "dark" && <button className="btn btn-light" onClick={() => setColorMode("light")}>Light</button>}
        {colorMode === "light" && <button className="btn btn-dark" onClick={() => setColorMode("dark")}>Dark</button>}
      </div>
    </div>
  );
};

export default HookFlow;
