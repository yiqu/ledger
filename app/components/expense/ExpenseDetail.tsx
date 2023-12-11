import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type { Expense } from "~/shared/models/expense.model";
import format from "date-fns/format";


function ExpenseDetail({ expense }: { expense: Expense }) {

  return (
    <Card elevation={ 0 }>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            { expense.account.name[0] }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ <Typography variant="h5" fontWeight={ 500 } className="montserrat">${ expense.amount.toLocaleString() }</Typography> }
        subheader={ expense.account.name }
        titleTypographyProps={ {
          className: 'montserrat',
          variant: 'h5'
        } }
      />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td>Date:</td>
              <td>
                { format(expense.date, 'MM/dd/yyyy HH:mm (pp)') }
              </td>
            </tr>
            <tr>
              <td>Date added:</td>
              <td>
                { format(expense.addedAtEpoch, 'MM/dd/yyyy HH:mm (pp)') }
              </td>
            </tr>
            <tr>
              <td>Last Updated:</td>
              <td>
                { expense.updatedAtEpoch ? format(expense.updatedAtEpoch, 'MM/dd/yyyy HH:mm (pp)') : 'N/A' }
              </td>
            </tr>
            <tr>
              <td>ID:</td>
              <td>{ expense.id }</td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default ExpenseDetail;