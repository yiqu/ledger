import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import format from "date-fns/format";

export const convertDateDisplay = (date: string | Date | null, displayType?: 'full' | 'short' | 'fromNow' | 'shortAndNow' | 'longAndNow') => {

  if (!date) {
    return {
      display: 'N/A',
      tooltip: 'N/A'
    };
  }

  const fullDate = format(new Date(date), 'MM/dd/yy HH:mm');
  const shortData = format(new Date(date), 'MM/dd/yy');
  const fromNow = formatDistanceToNowStrict(new Date(date), {addSuffix: true});
  const shortAndNow = `${shortData} (${fromNow})`;
  const longAndNow = `${fullDate} (${fromNow})`;

  return {
    display: displayType === 'fromNow' ? fromNow : (displayType === 'full' ? (fullDate) : (displayType === 'short' ? shortData :  (displayType === 'shortAndNow' ? shortAndNow : longAndNow))),
    tooltip: `${date} - ${format(new Date(date), 'MM/dd/yy hh:mm bbb')} - ${longAndNow}`
  };

};