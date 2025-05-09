"use client";
import CardFrame from './components/Atoms/CardFrame';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(false);

  return (
    <CardFrame selected={selected} onClick={() => setSelected(!selected)}>
      <p>카드 내용</p>
    </CardFrame>
  );
}
