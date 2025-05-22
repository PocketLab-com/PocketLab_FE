// Molecules - CardGrid
"use client";
import "./CardGrid.css";
import SelectableCard from "../SelectableCard";

// export default function CardGrid({ cards, selectedIds = [], onSelect }) {
//   return (
//     <div className="card-grid">
//       {cards.map((card) => (
//         <SelectableCard
//           key={card.id}
//           id={card.id}
//           image={card.image}
//           selected={selectedIds.includes(card.id)}
//           onSelect={onSelect}
//         />
//       ))}
//     </div>
//   );
// }

export default function CardGrid({ cards, selectedCounts = {}, onSelect }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <SelectableCard
          key={card.id}
          id={card.id}
          image={card.image}
          selectedCount={selectedCounts[card.id] || 0}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}