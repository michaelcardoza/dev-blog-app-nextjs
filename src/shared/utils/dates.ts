import type { Dayjs } from 'dayjs';
import dayjs, { isDayjs } from 'dayjs';

export { dayjs };

export const getFormattedDate = (
  date: Date | Dayjs,
  format = 'DD/MM/YYYY',
): string => {
  if (isDayjs(date)) {
    return date.format(format);
  }

  return dayjs(date).format(format);
};
