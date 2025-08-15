"use client";

import React, { useEffect, useState } from "react";

const LiveDate = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const currentMonth = today.toLocaleString("default", { month: "long" });
    const currentYear = today.getFullYear();

    setMonth(currentMonth);
    setYear(currentYear);

    let i = 0;
    const interval = setInterval(() => {
      setCurrentDay(i);
      i++;
      if (i > dayOfMonth) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav-li-css  text-[20px] px-3 py-2  h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150  text-white/90 font-headerFont md:text-[22px] lg:text-[26px] ">
      <h3 className="text-2xl">
        <span>{currentDay}</span> <span>{month},</span> <span>{year}</span>
      </h3>
    </div>
  );
};

export default LiveDate;
