"use client";
import "./CardFrame.css";
import { useState } from "react";

export default function CardFrame({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <img src={front} className="card-img" />
        </div>
        <div className="card-face card-back">
          <img src={back} className="card-img" />
        </div>
      </div>
    </div>
  );
}