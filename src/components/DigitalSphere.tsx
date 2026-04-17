import { useRef } from "react";
import { motion } from "framer-motion";

const DigitalSphere = ({ className = "" }: { className?: string }) => {
  const lines = Array.from({ length: 8 });
  const dots = Array.from({ length: 24 });

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px]" />

      {/* Main sphere container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full"
      >
        {/* Wireframe circles */}
        {lines.map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/20"
            style={{
              transform: `rotateY(${i * 22.5}deg) rotateX(15deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}

        {/* Horizontal rings */}
        {[0, 30, -30, 60, -60].map((angle, i) => (
          <div
            key={`h-${i}`}
            className="absolute inset-0 rounded-full border border-primary/15"
            style={{
              transform: `rotateX(${angle}deg)`,
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting particles */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        {dots.map((_, i) => {
          const angle = (i / dots.length) * Math.PI * 2;
          const radius = 48 + Math.random() * 4;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                opacity: 0.3 + Math.random() * 0.7,
                boxShadow: "0 0 6px hsl(190 100% 50% / 0.6)",
              }}
            />
          );
        })}
      </motion.div>

      {/* Center glow */}
      <div className="absolute inset-[30%] rounded-full bg-primary/5 blur-xl" />
    </div>
  );
};

export default DigitalSphere;
