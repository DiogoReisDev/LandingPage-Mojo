import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCarousel({ images, onClick }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, hovered]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-in-out
            ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        />
      ))}

      {hovered && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
