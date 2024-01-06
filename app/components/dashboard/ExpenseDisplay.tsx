import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Link } from "@remix-run/react";
import Currency from "~/shared/components/Currency";
import type { ExpenseDisplay as IExpenseDisplay } from "~/shared/models/expense.model";
import { ClientOnly } from "remix-utils/client-only";
import Moment from "react-moment";

function ExpenseDisplay({ expense }: { expense: IExpenseDisplay }) {

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="start" width="100%" mb={ 1 } py={ 1 } px={ 2 } className={ `${expense.bgColorClassName} expense-box` }>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 0.5 }>
        <ClientOnly fallback={ <span style={ { color: grey[600] } }>Loading</span> }>
          { () => {
            return (
              <Moment date={ expense.date } fromNow style={ { color: grey[600] } } />
            );
          } }
        </ClientOnly>

        <Typography fontFamily="Montserrat" title={ `${expense.amount}` } letterSpacing="0.5px" component="div">
          <Link to={ `/expenses/${expense.id}` }>
            <Currency integer={ expense.amountOfInteger } decimal={ expense.amountOfDecimal } extraStyles={ { fontWeight: 400, fontSize: ('17px') } } />
          </Link>
        </Typography>
        <Typography fontFamily="Montserrat" fontWeight="300" letterSpacing="0.5px" title={ `${expense.gainAmount}` }
          component="div" display="flex" color={ grey[600] }>
          { expense.gainAmount > 0 ? '+' : (expense.gainAmount === 0 ? '' : '-') }${ expense.gainAmount === 0 ? '0'
            :
            (<Currency integer={ expense.gainAmountOfInteger } decimal={ expense.gainAmountOfDecimal } />)
          }
        </Typography>
      </Stack>

      <Stack direction="column" justifyContent="start" alignItems="end">
        { true && <Typography title={ `${expense.dateFullDisplay?.tooltip}` } color={ grey[600] }>
          { expense.dateFullDisplay?.display }
        </Typography> }
        <Typography className={ expense.textColorClassName } fontSize="17px" fontWeight={ 500 }>
          { expense.gainPercentage > 0 ? '+' : (expense.gainPercentage === 0 ? '' : '-') }{ `${(Math.round(Math.abs(expense.gainPercentage) * 10) / 10).toLocaleString()}` }%
        </Typography>

      </Stack>
    </Stack>
  );
}

export default ExpenseDisplay;