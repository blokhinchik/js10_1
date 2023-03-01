// Get days in year
function getDaysInYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}
console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

// Get day of a year
function getDayNumber(dateString) {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const diff = (date - startOfYear) / (1000 * 60 * 60 * 24);
  return Math.floor(diff) + 1;
}
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));

// Get fiscal quarters
function getDateInfo(dateString) {
  const date = new Date(dateString);
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const day = date.getDate();
  const quarter = Math.ceil((monthIndex + 1) / 3);

  return {
    month,
    day,
    quarter,
  };
}
console.log(getDateInfo("2023-02-26"));

// Write a function to calculate date diff
function calcDateDiff(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = Math.abs(end - start);

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 60) {
    return `${diffMinutes} minutes`;
  }

  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutesRemainder = diffMinutes % 60;
  if (diffHours < 24) {
    const hoursStr = diffHours === 1 ? "1 hour" : `${diffHours} hours`;
    const minutesStr =
      diffMinutesRemainder === 0 ? "" : ` ${diffMinutesRemainder} minutes`;
    return `${hoursStr}${minutesStr}`;
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays < 30) {
    const daysStr = diffDays === 1 ? "1 day" : `${diffDays} days`;
    return daysStr;
  }

  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));
  if (diffMonths < 12) {
    const monthsStr = diffMonths === 1 ? "1 month" : `${diffMonths} months`;
    return monthsStr;
  }

  const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
  const diffMonthsRemainder = diffMonths % 12;
  const yearsStr = diffYears === 1 ? "1 year" : `${diffYears} years`;
  if (diffMonthsRemainder === 0) {
    return yearsStr;
  }

  const monthsStr =
    diffMonthsRemainder === 1 ? "1 month" : `${diffMonthsRemainder} months`;
  return `${yearsStr} ${monthsStr}`;
}
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));
console.log(calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30"));

// Create a map
let map = new Map([
  [1, { id: 1, value: 1, date: "2022-02-15" }],
  [2, { id: 2, value: 1242, date: "2023-02-15" }],
  [3, { id: 3, value: 3342, date: "2021-02-15" }],
]);

console.log(map);

//Create a cache
