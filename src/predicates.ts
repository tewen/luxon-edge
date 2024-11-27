import { DateTime } from 'luxon';

export const isLeapYear = (dateTime: DateTime) => {
  const beginningOfYear = dateTime.startOf('year');
  const { days } = beginningOfYear
    .plus({ year: 1 })
    .diff(beginningOfYear, ['days'])
    .toObject();
  return days === 366;
};

export const isWithinMonth = (dateTime: DateTime, month: DateTime) => {
  return dateTime >= month.startOf('month') && dateTime <= month.endOf('month');
};

export const isSameDay = (dateTimeA: DateTime, dateTimeB: DateTime) => {
  return (
    dateTimeA.year === dateTimeB.year &&
    dateTimeA.month === dateTimeB.month &&
    dateTimeA.day === dateTimeB.day
  );
};

export const isWeekDay = (dateTime: DateTime) => {
  return dateTime.weekday < 6;
};

export const isWeekend = (dateTime: DateTime) => {
  return [6, 7].includes(dateTime.weekday);
};

export const isMonday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 1;
};

export const isTuesday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 2;
};

export const isWednesday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 3;
};

export const isThursday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 4;
};

export const isFriday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 5;
};

export const isSaturday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 6;
};

export const isSunday = (dateTime: DateTime = DateTime.now()) => {
  return dateTime.weekday === 7;
};
