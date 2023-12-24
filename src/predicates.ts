import type { DateTime } from 'luxon';

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
  return [0, 6].includes(dateTime.weekday);
};
