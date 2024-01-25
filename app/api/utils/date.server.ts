import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import formatInTimeZone from 'date-fns-tz/formatInTimeZone';

const EST_TIME_ZONE = 'America/New_York';
const fullDateFormatString = 'MM/dd/yy h:mm aa';
const fullDateTooltipFormatString = 'MM/dd/yyyy h:mm aa O';
const shortDateFormatString = 'MM/dd/yy';

export const convertDateDisplay = (date: string | Date | number | null | undefined,
  displayType?: 'full' | 'short' | 'fromNow' | 'shortAndNow' | 'longAndNow' | 'fromNowUnlessFarBack') => {

  if (!date) {
    return {
      display: 'N/A',
      tooltip: 'N/A'
    };
  }

  const fullDate = formatInTimeZone(new Date(date), EST_TIME_ZONE, fullDateFormatString); //'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzz'
  const shortDate = formatInTimeZone(new Date(date), EST_TIME_ZONE, shortDateFormatString);
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
    tooltip: `${formatInTimeZone(new Date(date), EST_TIME_ZONE, fullDateTooltipFormatString)} (${fromNow})`
  };

};