import type { DateTime, DurationLike } from 'luxon';

export const sequenceIncludingStart = (
  start: DateTime,
  durationLike: DurationLike,
  count: number,
) => {
  const ar: DateTime[] = [];
  let index = 0;
  let current = start;
  while (index < count) {
    // eslint-disable-next-line functional/immutable-data
    ar.push(current);
    current = current.plus(durationLike);
    index += 1;
  }

  return ar;
};

export const sequenceIncludingEnd = (
  end: DateTime,
  durationLike: DurationLike,
  count: number,
) => {
  const ar: DateTime[] = [];
  let index = 0;
  let current = end;
  while (index < count) {
    // eslint-disable-next-line functional/immutable-data
    ar.unshift(current);
    current = current.minus(durationLike);
    index += 1;
  }

  return ar;
};
