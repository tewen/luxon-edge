import { DateTime } from 'luxon';

import { sequenceIncludingEnd, sequenceIncludingStart } from '../';

describe('sequence', () => {
  const defaultTestDate = DateTime.fromObject({
    day: 23,
    month: 7,
    year: 2021,
  });

  describe('sequenceIncludingStart()', () => {
    it('should return an empty array if given 0 for the count', () => {
      const result = sequenceIncludingStart(defaultTestDate, { days: 1 }, 0);
      expect(result).toEqual([]);
    });

    it('should return just an array with the start date if passed 1 for the count', () => {
      const result = sequenceIncludingStart(defaultTestDate, { months: 7 }, 1);
      expect(result).toEqual([defaultTestDate]);
    });

    it('should return the count specified, days incremented according the durationLike parameter', () => {
      const result = sequenceIncludingStart(defaultTestDate, { days: 1 }, 3);
      expect(result).toEqual([
        defaultTestDate,
        defaultTestDate.plus({ days: 1 }),
        defaultTestDate.plus({ days: 2 }),
      ]);
    });

    it('should play nice with longer durationLike parameters', () => {
      const result = sequenceIncludingStart(defaultTestDate, { months: 7 }, 5);
      expect(result).toEqual([
        defaultTestDate,
        defaultTestDate.plus({ months: 7 }),
        defaultTestDate.plus({ months: 14 }),
        defaultTestDate.plus({ months: 21 }),
        defaultTestDate.plus({ months: 28 }),
      ]);
    });
  });

  describe('sequenceIncludingEnd()', () => {
    it('should return an empty array if given 0 for the count', () => {
      const result = sequenceIncludingEnd(defaultTestDate, { years: 1 }, 0);
      expect(result).toEqual([]);
    });

    it('should return just an array with the start date if passed 1 for the count', () => {
      const result = sequenceIncludingEnd(defaultTestDate, { minutes: 42 }, 1);
      expect(result).toEqual([defaultTestDate]);
    });

    it('should return the count specified, days incremented according the durationLike parameter', () => {
      const result = sequenceIncludingEnd(defaultTestDate, { days: 1 }, 3);
      expect(result).toEqual([
        defaultTestDate.minus({ days: 2 }),
        defaultTestDate.minus({ days: 1 }),
        defaultTestDate,
      ]);
    });

    it('should play nice with longer durationLike parameters', () => {
      const result = sequenceIncludingEnd(defaultTestDate, { minutes: 76 }, 6);
      expect(result).toEqual([
        defaultTestDate.minus({ minutes: 76 * 5 }),
        defaultTestDate.minus({ minutes: 76 * 4 }),
        defaultTestDate.minus({ minutes: 76 * 3 }),
        defaultTestDate.minus({ minutes: 76 * 2 }),
        defaultTestDate.minus({ minutes: 76 }),
        defaultTestDate,
      ]);
    });
  });
});
