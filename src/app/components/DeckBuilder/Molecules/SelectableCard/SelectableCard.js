// Molecules - SelectableCard
"use client";
import "./SelectableCard.css";

export default function SelectableCard({ id, image, selected, onSelect }) {
  return (
    <div
      className={`selectable-card ${selected ? "selected" : ""}`}
      onClick={() => onSelect?.(id)}
    >
      <img src={image} alt="card" className="card-thumb" />
    </div>
  );
}
