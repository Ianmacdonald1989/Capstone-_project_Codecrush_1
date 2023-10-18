import React from "react";

export const DayDate = () => {
  const date = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = date.toLocaleString("en-US", { month: "long" });
  const dayOfMonth = date.getDate();
  let ordinalIndicator;
  switch (dayOfMonth) {
    case 1:
    case 21:
    case 31:
      ordinalIndicator = "st";
      break;
    case 2:
    case 22:
      ordinalIndicator = "nd";
      break;
    case 3:
    case 23:
      ordinalIndicator = "rd";
      break;
    default:
      ordinalIndicator = "th";
      break;
  }

  return <h2 className="text-sm text-gray-500 dark:text-slate-200 dark:opacity-70 mb-3">{`${dayOfWeek} ${dayOfMonth}${ordinalIndicator} ${month}`}</h2>;
};
