"use client"

import React, { useState, useEffect, useRef } from 'react';

interface Props {
  initialCount : number,
  timeDuration: number,
  symbol: string,
  iterationCount : number,
}

const CountdownCaseStudy = ({ initialCount, timeDuration, symbol, iterationCount } : Props) => {
  const [isCounting, setIsCounting] = useState(false);
  const [IsMounted, setIsMounted] = useState(false);
  const [count, setCount] = useState(0);
  const countdownRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isCounting) {
        setTimeout(() => {
          setIsCounting(true);
        }, 500);
      }
    }, options);

    if (countdownRef.current) {
      observer.observe(countdownRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isCounting]);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (count < initialCount) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + iterationCount);
      }, timeDuration);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isCounting, count, initialCount, timeDuration]);

  useEffect(() => {
    setIsMounted(true);
  }, [])
  
  if(!IsMounted){
    return null;
  }

  return (
    <div
      ref={countdownRef}
      className="text-2xl font-semibold text-green-500 md:text-3xl"
    >
      {count}{symbol}
    </div>
  );
};

export default CountdownCaseStudy;