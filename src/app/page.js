"use client";
import CardFrame from './components/Atoms/CardFrame';
import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState(false);

  return (
    <CardFrame
      front="/sol.jpg"
      back="/back.jpg"
    />
  );
}