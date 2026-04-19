import { useState } from "react";

export const useCarousel = (length, itemsPerView) => {
  const [index, setIndex] = useState(0);

  const maxIndex = length - itemsPerView;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return { index, next, prev };
};
