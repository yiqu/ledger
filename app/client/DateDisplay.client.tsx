import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";

function DateDisplay({ date, displayType }: { date: string | Date | null, displayType?: 'full' | 'short' | 'fromNow' | 'shortAndNow' | 'longAndNow' }) {

  if (!date) {
    return <>{ new Date() }</>;
  }

  const fullDate = format(new Date(date), 'MM/dd/yy hh:mm bbb');
  const shortData = format(new Date(date), 'MM/dd/yy');
  const fromNow = formatDistanceToNow(new Date(date), {addSuffix: true});
  const shortAndNow = `${shortData} (${fromNow})`;
  const longAndNow = `${fullDate} (${fromNow})`;

  return (
    <span data-tooltip-id="tooltip" data-tooltip-content={ `${date} - ${format(new Date(date), 'MM/dd/yy hh:mm bbb')} - ${longAndNow}` }>
      { displayType === 'fromNow' ? fromNow : (displayType === 'full' ? (fullDate) : (displayType === 'short' ? shortData :  (displayType === 'shortAndNow' ? shortAndNow : longAndNow))) }
    </span>
  );
}

export default DateDisplay;