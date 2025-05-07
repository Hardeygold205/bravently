"use client";

import React from "react";
import CountUp from "react-countup";

interface InfoListProps {
  numbers: number;
  text: string;
}

export const InfoList: React.FC<InfoListProps> = ({ numbers, text }) => {
  return (
    <div className="flex items-center space-x-2 flex-1 w-full justify-center xl:justify-start">
      <h1 className="text-slate-700 text-5xl font-extrabold dark:text-slate-300">
        <CountUp start={0} end={numbers} delay={3} duration={2} />
      </h1>
      <p
        className={`${
          text.length < 15 ? "max-w-[80px]" : "max-w-[100px]"
        } text-md font-extrabold leading-snug`}>
        {text}
      </p>
    </div>
  );
};
