import moment from 'moment';

export const disabledBirthdayDate = current =>
  current && current > moment().endOf('day').add(-1, 'day');