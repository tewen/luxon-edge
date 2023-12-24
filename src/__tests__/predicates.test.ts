import { DateTime } from 'luxon';

import { isSameDay, isWeekDay, isWithinMonth } from '../';

describe('predicates', () => {
  describe('isWithinMonth()', () => {
    it('should return true for a day within the given month', () => {
      const dateTime = DateTime.fromObject({ day: 5, month: 9, year: 1995 });
      const month = DateTime.fromObject({ day: 28, month: 9, year: 1995 });
      expect(isWithinMonth(dateTime, month)).toBe(true);
    });

    it('should return false for a day outside the month', () => {
      const dateTime = DateTime.fromObject({ day: 1, month: 10, year: 1995 });
      const month = DateTime.fromObject({ day: 28, month: 9, year: 1995 });
      expect(isWithinMonth(dateTime, month)).toBe(false);
    });

    it('should return true for the first day of the month', () => {
      const dateTime = DateTime.fromObject({ day: 5, month: 9, year: 1995 });
      const month = DateTime.fromObject({ day: 1, month: 9, year: 1995 });
      expect(isWithinMonth(dateTime, month)).toBe(true);
    });

    it('should return true for the last day of the month', () => {
      const dateTime = DateTime.fromObject({ day: 5, month: 9, year: 1995 });
      const month = DateTime.fromObject({ day: 30, month: 9, year: 1995 });
      expect(isWithinMonth(dateTime, month)).toBe(true);
    });
  });

  describe('isSameDay()', () => {
    it('should return true when day, month, and year match', () => {
      const dateTimeA = DateTime.fromObject({
        day: 25,
        hour: 6,
        month: 12,
        year: 2002,
      });
      const dateTimeB = DateTime.fromObject({
        day: 25,
        hour: 10,
        month: 12,
        year: 2002,
      });
      expect(isSameDay(dateTimeA, dateTimeB)).toBe(true);
    });

    it('should return false when it is not a day, month, year match', () => {
      const dateTimeA = DateTime.fromObject({
        day: 25,
        hour: 6,
        month: 12,
        year: 2002,
      });
      const dateTimeB = DateTime.fromObject({
        day: 24,
        hour: 6,
        month: 12,
        year: 2002,
      });
      expect(isSameDay(dateTimeA, dateTimeB)).toBe(false);
    });
  });

  describe('isWeekDay()', () => {
    it('should return true for a weekday', () => {
      const dateTime = DateTime.fromObject({ day: 21, month: 12, year: 2023 });
      expect(isWeekDay(dateTime)).toBe(true);
    });

    it('should return false for Saturday', () => {
      const dateTime = DateTime.fromObject({ day: 23, month: 12, year: 2023 });
      expect(isWeekDay(dateTime)).toBe(false);
    });

    it('should return false for Sunday', () => {
      const dateTime = DateTime.fromObject({ day: 24, month: 12, year: 2023 });
      expect(isWeekDay(dateTime)).toBe(false);
    });
  });

  describe('isWeekend()', () => {
    it('should return true for Saturday', () => {});

    it('should return true for Sunday', () => {});

    it('should return false for a weekday', () => {});
  });
});
