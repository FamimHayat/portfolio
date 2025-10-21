"use client";

import React, { useEffect, useState } from "react";

const LiveDate = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [monthName, setMonthName] = useState("");
  const [monthNumber, setMonthNumber] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const currentMonthName = today.toLocaleString("default", { month: "long" });
    const currentMonthNumber = today.getMonth() + 1; // 0-based → +1
    const currentYear = today.getFullYear();

    setMonthName(currentMonthName);
    setMonthNumber(currentMonthNumber);
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
    <div className="nav-li-css text-[20px] px-3 py-2 h-fit bg-[#00000040] cursor-pointer rounded-4xl border-2 text-glow border-brand duration-150 text-white/90 font-headerFont md:text-[22px] lg:text-[26px]">
      <h3 className="text-xl">
        <span>{currentDay}</span> ,
        {/* Show month number on xs, full name on sm+ */}
        <span className="sm:hidden">{monthNumber}</span>
        <span className="hidden sm:inline">{monthName}</span>,{" "}
        <span>{year}</span>
      </h3>
    </div>
  );
};

export default LiveDate;
