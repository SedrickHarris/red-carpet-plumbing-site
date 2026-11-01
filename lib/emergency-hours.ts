// 24/7 emergency availability for Emergency Plumbing Service schema only.
// Office hours (Monday to Friday, 07:30 to 16:30) live in the Plumber schema
// and must not be changed or replaced by this value.
export const EMERGENCY_HOURS_AVAILABLE = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
} as const;
