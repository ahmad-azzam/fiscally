"use client";

import React from "react";
import CountUp from "react-countup";

const GenAnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp decimal="." prefix="$" end={amount} decimals={2} />
    </div>
  );
};

export default GenAnimatedCounter;
