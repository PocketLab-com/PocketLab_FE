// components/Molecules/SelectedPanel.js
"use client";
import "./SelectedPanel.css";

export default function SelectedPanel({ cards }) {
  return (
    <div className="selected-panel">
      <div className="selected-list">
        {cards.map((card) => (
          <img key={card.id} src={card.image} alt={card.id} className="selected-thumb" />
        ))}
      </div>
    </div>
  );
}