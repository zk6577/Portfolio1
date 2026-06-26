import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] size-[300px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12),transparent_65%)] transition-transform duration-[80ms] ease-linear"
      style={{ transform: `translate(${position.x - 150}px, ${position.y - 150}px)` }}
    />
  );
}

export default CursorGlow;
