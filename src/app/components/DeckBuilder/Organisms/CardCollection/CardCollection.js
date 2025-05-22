// Organisms - CardCollection
"use client";
import { useEffect, useState } from "react";
import CardGrid from "../../Molecules/CardGrid";
import SelectedPanel from "../../Molecules/SelectedPanel";
import "./CardCollection.css";

export default function CardCollection() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [selectedCounts, setSelectedCounts] = useState({}); // 변경됨

  const MAX_DUPLICATES = 2;
  const MAX_TOTAL_SELECTED = 20;

  useEffect(() => {
    fetch("/cards.json")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => {
          if (a.set === b.set) return Number(a.number) - Number(b.number);
          return a.set.localeCompare(b.set);
        });
        setCards(data);
        setFilteredCards(data);
      });
  }, []);

const handleSelect = (id) => {
  setSelectedCounts((prev) => {
    const count = prev[id] || 0;

    // 이미 최대치까지 선택된 이 카드는 제거
    if (count >= MAX_DUPLICATES) {
      const newCounts = { ...prev };
      delete newCounts[id];
      return newCounts;
    }

    // 이 카드를 1장 더 추가할 경우 총 선택 수
    const currentTotal = Object.values(prev).reduce((sum, val) => sum + val, 0);
    if (currentTotal >= MAX_TOTAL_SELECTED) {
      // 총합 초과시 아무것도 추가하지 않음
      return prev;
    }

    return {
      ...prev,
      [id]: count + 1,
    };
  });
};



  const selectedCards = cards.flatMap((card) => {
    const count = selectedCounts[card.id] || 0;
    return Array(count).fill(card); // 같은 카드 중복 삽입
  });

  return (
    <div className="home-container">
      <div className="card-grid-wrapper">
        <CardGrid
          cards={filteredCards}
          selectedCounts={selectedCounts}
          onSelect={handleSelect}
        />
      </div>
      <div className="selected-panel-wrapper">
        <SelectedPanel cards={selectedCards} />
      </div>
    </div>
  );
}
