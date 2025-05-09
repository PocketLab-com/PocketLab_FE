"use client";

import { useEffect } from "react";

export default function TiltInitializer() {
  useEffect(() => {
    import("vanilla-tilt").then((VanillaTilt) => {
      const cards = document.querySelectorAll(".card");
      VanillaTilt.default.init(cards, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });
  }, []);

  return null;
}