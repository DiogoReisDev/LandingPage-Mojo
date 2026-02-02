import React, { useEffect, useState } from "react";

// Logos
import logoBeigeBg from "@/assets/logo/logo-bg.png";     // logo VERDE (para fundo bege)
import logoGreenBg from "@/assets/logo/logo-verde.png"; // logo BEGE (para fundo verde)

const generateLogos = (count = 12) => {
  const logos = [];
  const minDistance = 18; // distância mínima entre logos (%)

  const isTooClose = (x, y) => {
    return logos.some((logo) => {
      const dx = logo.left - x;
      const dy = logo.top - y;
      return Math.sqrt(dx * dx + dy * dy) < minDistance;
    });
  };

  while (logos.length < count) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    if (!isTooClose(left, top)) {
      logos.push({
        top,
        left,
        rotate: Math.random() * 60 - 30,
        scale: Math.random() * 0.4 + 0.5,      // 0.5 → 0.9
        opacity: Math.random() * 0.12 + 0.15,  // 0.15 → 0.27
      });
    }
  }

  return logos;
};

export default function LogoBackground({
  count = 20,
  theme = "beige", // ⬅️ NOVO (padrão mantém comportamento atual)
}) {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(generateLogos(count));
  }, [count]);

  // 🔹 Define qual logo usar conforme o fundo
  const logoSrc = theme === "green" ? logoGreenBg : logoBeigeBg;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {logos.map((item, index) => (
        <img
          key={index}
          src={logoSrc}
          alt=""
          style={{
            position: "absolute",
            top: `${item.top}%`,
            left: `${item.left}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg) scale(${item.scale})`,
            opacity: item.opacity,
            width: "240px",
            userSelect: "none",
          }}
        />
      ))}
    </div>
  );
}
