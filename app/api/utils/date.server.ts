import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import format from "date-fns/format";

export const convertDateDisplay = (date: string | Date | number | null | undefined,
  displayType?: 'full' | 'short' | 'fromNow' | 'shortAndNow' | 'longAndNow' | 'fromNowUnlessFarBack') => {

  if (!date) {
    return {
      display: 'N/A',
      tooltip: 'N/A'
    };
  }

  const fullDate = format(new Date(date), 'MM/dd/yy h:mm bbb');
  const shortDate = format(new Date(date), 'MM/dd/yy');
  const fromNow = formatDistanceToNowStrict(new Date(date), { addSuffix: true });
  const shortAndNow = `${shortDate} (${fromNow})`;
  const longAndNow = `${fullDate} (${fromNow})`;
  const fromNowUnlessFarBack = (Date.now() - (new Date(date).getTime()) > (7 * 24 * 60 * 60 * 1000) ? fullDate : fromNow);

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
    tooltip: `${format(new Date(date), 'MM/dd/yyyy h:mm aa')} (${fromNow})`
  };

};