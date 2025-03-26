"use client"

import React, { useState, useEffect } from 'react';
import './count-down-style.css';

function FlipCard({ value }:{value: any}) {
  const [currentValue, setCurrentValue] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== currentValue) {
      setFlipping(true);
      setTimeout(() => {
        setCurrentValue(value);
        setFlipping(false);
      }, 250);
    }
  }, [value, currentValue]);

  return (
    <div className={`flip-card ${flipping ? 'flipping' : ''}`}>
      <div className="top text-3xl md:text-5xl">{currentValue}</div>
      <div className="bottom text-3xl md:text-5xl">{currentValue}</div>
    </div>
  );
}

export default FlipCard;
