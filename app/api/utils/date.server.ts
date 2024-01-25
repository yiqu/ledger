import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';
import {
  EST_TIME_ZONE, FULL_DATE_FORMAT_STRING, FULL_DATE_TOOLTIP_FORMAT_STRING,
  SHORT_DATE_FORMAT_STRING
} from "./utils.server";


export const convertDateDisplay = (date: string | Date | number | null | undefined,
  displayType?: 'full' | 'short' | 'fromNow' | 'shortAndNow' | 'longAndNow' | 'fromNowUnlessFarBack') => {

  if (!date) {
    return {
      display: 'N/A',
      tooltip: 'N/A'
    };
  }

  const fullDate = formatInTimeZone(new Date(date), EST_TIME_ZONE, FULL_DATE_FORMAT_STRING);
  const shortDate = formatInTimeZone(new Date(date), EST_TIME_ZONE, SHORT_DATE_FORMAT_STRING);
  const fromNow = formatDistanceToNowStrict(new Date(date), { addSuffix: true });
  const shortAndNow = `${shortDate} (${fromNow})`;
  const longAndNow = `${fullDate} (${fromNow})`;
  const fromNowUnlessFarBack = (Date.now() - (new Date(date).getTime()) > (1 * 24 * 60 * 60 * 1000) ? fullDate : fromNow);

  let result = fullDate;
  switch (displayType) {
    case 'full':
      result = fullDate;
      break;
    case 'short':
      result = shortDate;
      break;
    case 'fromNow':
      result = fromNow;
      break;
    case 'shortAndNow':
      result = shortAndNow;
      break;
    case 'longAndNow':
      result = longAndNow;
      break;
    case 'fromNowUnlessFarBack':
      result = fromNowUnlessFarBack;
      break;
    default:
      result = fullDate;
      break;
  }

  return {
    display: result,
    tooltip: `${formatInTimeZone(new Date(date), EST_TIME_ZONE, FULL_DATE_TOOLTIP_FORMAT_STRING)} (${fromNow})`
  };

};