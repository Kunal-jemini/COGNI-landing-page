"use client";

import { useRef } from 'react';

export const useCategoryScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by 80% of the visible width
      const scrollAmount = direction === 'left' ? -(clientWidth * 0.8) : (clientWidth * 0.8);
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return { scrollRef, scroll };
};