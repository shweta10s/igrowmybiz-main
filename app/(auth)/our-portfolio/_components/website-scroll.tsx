"use client"

import { useState, useRef, MouseEvent } from 'react';

const WebsiteScroll: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.scrollTo(0, 0); // Reset scroll position
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (iframeRef.current) {
      const rect = iframeRef.current.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const scrollSpeed = 2; // Adjust the scrolling speed as needed
      iframeRef.current.contentWindow?.scrollTo(0, offsetY * scrollSpeed);
    }
  };

  return (
    <div
      className="relative h-full w-full bg-primary-main text-white flex items-center justify-center cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      Hover over me
      <iframe
        ref={iframeRef}
        src="https://www.shim.co.in/"
        title="Full Webpage"
        className={`absolute top-0 left-0 w-full h-full border-none transition-transform duration-300 block z-10'`}
      ></iframe>
    </div>
  );
};

export default WebsiteScroll;
