import { DateTime } from 'luxon';

import {
  isFriday,
  isLeapYear,
  isMonday,
  isSameDay,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
  isWeekDay,
  isWeekend,
  isWithinMonth,
} from '../';

describe('predicates', () => {
  describe('isLeapYear()', () => {
    it('should return false for a day in 2023', () => {
      const dateTime = DateTime.fromObject({ day: 22, month: 4, year: 2023 });
      expect(isLeapYear(dateTime)).toBe(false);
    });

    it('should return false for the first day in 2014', () => {
      const dateTime = DateTime.fromObject({ day: 1, month: 1, year: 2014 });
      expect(isLeapYear(dateTime)).toBe(false);
    });

    it('should return false for the last day in 2019', () => {
      const dateTime = DateTime.fromObject({ day: 31, month: 12, year: 2019 });
      expect(isLeapYear(dateTime)).toBe(false);
    });

    it('should return true for any day in 2024', () => {
      const dateTime = DateTime.fromObject({ day: 8, month: 3, year: 2024 });
      expect(isLeapYear(dateTime)).toBe(true);
    });

    it('should return true for the first day of 2020', () => {
      const dateTime = DateTime.fromObject({ day: 1, month: 1, year: 2020 });
      expect(isLeapYear(dateTime)).toBe(true);
    });

    it('should return true for the last day of 2016', () => {
      const dateTime = DateTime.fromObject({ day: 31, month: 12, year: 2016 });
      expect(isLeapYear(dateTime)).toBe(true);
    });
  });

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
    it('should return true for Saturday', () => {
      const dateTime = DateTime.fromObject({ day: 23, month: 12, year: 2023 });
      expect(isWeekend(dateTime)).toBe(true);
    });

    it('should return true for Sunday', () => {
      const dateTime = DateTime.fromObject({ day: 7, month: 1, year: 2024 });
      expect(isWeekend(dateTime)).toBe(true);
    });

    it('should return false for a Monday', () => {
      const dateTime = DateTime.fromObject({ day: 8, month: 1, year: 2024 });
      expect(isWeekend(dateTime)).toBe(false);
    });

    it('should return false for a Wednesday', () => {
      const dateTime = DateTime.fromObject({ day: 7, month: 2, year: 2024 });
      expect(isWeekend(dateTime)).toBe(false);
    });

    it('should return false for a Friday', () => {
      const dateTime = DateTime.fromObject({ day: 9, month: 2, year: 2024 });
      expect(isWeekend(dateTime)).toBe(false);
    });
  });

  describe('isMonday()', () => {
    it('should return true for a Monday', () => {
      const dateTime = DateTime.fromObject({ day: 25, month: 11, year: 2024 });
      expect(isMonday(dateTime)).toBe(true);
    });

    it('should return false for a Thursday', () => {
      const dateTime = DateTime.fromObject({ day: 28, month: 11, year: 2024 });
      expect(isMonday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 1) {
        expect(isMonday()).toBe(true);
      } else {
        expect(isMonday()).toBe(false);
      }
    });
  });

  describe('isTuesday()', () => {
    it('should return true for a Tuesday', () => {
      const dateTime = DateTime.fromObject({ day: 26, month: 11, year: 2024 });
      expect(isTuesday(dateTime)).toBe(true);
    });

    it('should return false for a Thursday', () => {
      const dateTime = DateTime.fromObject({ day: 28, month: 11, year: 2024 });
      expect(isTuesday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 2) {
        expect(isTuesday()).toBe(true);
      } else {
        expect(isTuesday()).toBe(false);
      }
    });
  });

  describe('isWednesday()', () => {
    it('should return true for a Wednesday', () => {
      const dateTime = DateTime.fromObject({ day: 27, month: 11, year: 2024 });
      expect(isWednesday(dateTime)).toBe(true);
    });

    it('should return false for a Sunday', () => {
      const dateTime = DateTime.fromObject({ day: 24, month: 11, year: 2024 });
      expect(isWednesday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 3) {
        expect(isWednesday()).toBe(true);
      } else {
        expect(isWednesday()).toBe(false);
      }
    });
  });

  describe('isThursday()', () => {
    it('should return true for a Thursday', () => {
      const dateTime = DateTime.fromObject({ day: 28, month: 11, year: 2024 });
      expect(isThursday(dateTime)).toBe(true);
    });

    it('should return false for a Sunday', () => {
      const dateTime = DateTime.fromObject({ day: 24, month: 11, year: 2024 });
      expect(isThursday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 4) {
        expect(isThursday()).toBe(true);
      } else {
        expect(isThursday()).toBe(false);
      }
    });
  });

  describe('isFriday()', () => {
    it('should return true for a Friday', () => {
      const dateTime = DateTime.fromObject({ day: 29, month: 11, year: 2024 });
      expect(isFriday(dateTime)).toBe(true);
    });

    it('should return false for a Saturday', () => {
      const dateTime = DateTime.fromObject({ day: 23, month: 11, year: 2024 });
      expect(isFriday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 5) {
        expect(isFriday()).toBe(true);
      } else {
        expect(isFriday()).toBe(false);
      }
    });
  });

  describe('isSaturday()', () => {
    it('should return true for a Saturday', () => {
      const dateTime = DateTime.fromObject({ day: 23, month: 11, year: 2024 });
      expect(isSaturday(dateTime)).toBe(true);
    });

    it('should return false for a Friday', () => {
      const dateTime = DateTime.fromObject({ day: 29, month: 11, year: 2024 });
      expect(isSaturday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 6) {
        expect(isSaturday()).toBe(true);
      } else {
        expect(isSaturday()).toBe(false);
      }
    });
  });

  describe('isSunday()', () => {
    it('should return true for a Sunday', () => {
      const dateTime = DateTime.fromObject({ day: 24, month: 11, year: 2024 });
      expect(isSunday(dateTime)).toBe(true);
    });

    it('should return false for a Wednesday', () => {
      const dateTime = DateTime.fromObject({ day: 27, month: 11, year: 2024 });
      expect(isSunday(dateTime)).toBe(false);
    });

    it('should return correctly for the default argument depending on the day of the week', () => {
      const { weekday } = DateTime.now();
      if (weekday === 7) {
        expect(isSunday()).toBe(true);
      } else {
        expect(isSunday()).toBe(false);
      }
    });
  });
});
