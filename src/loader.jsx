import { useState, useEffect } from "react";

function TopLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "DodgerBlue",
        width: `${progress}%`,
      }}
    />
  );
}

export default TopLoader;
