import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
      glowRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (!glowRef.current) return;
      glowRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9999] opacity-0 transition-opacity duration-200"
      style={{
        width: "700px",
        height: "700px",
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(109, 40, 217, 0.14) 35%, rgba(76, 29, 149, 0.06) 60%, transparent 75%)",
        borderRadius: "50%",
      }}
    />
  );
}
