import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import type { Expense } from "~/shared/models/expense.model";

function ExpenseDetail({ expense }: { expense: Expense }) {

  return (
    <Card elevation={ 0 }>
      <CardHeader
        avatar={
          <Avatar aria-label="account-avatar">
            { expense.account.name[0] }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ <Typography variant="h5" fontWeight={ 500 }>${ expense.amount.toLocaleString() }</Typography> }
        subheader={ expense.account.name }
        titleTypographyProps={ {
          variant: 'h5'
        } }
      />
      <CardContent>
        <table>
          <tbody>
            <tr>
              <td>Expense Date:</td>
              <td title={ expense.dateFromNow?.tooltip }>
                { expense.dateFromNow?.display }
              </td>
            </tr>
            <tr>
              <td>Added:</td>
              <td title={ expense.dateAddedFromNow?.tooltip }>
                { expense.dateAddedFromNow?.display }
              </td>
            </tr>
            <tr>
              <td>Last Updated:</td>
              <td title={ expense.updatedAtEpoch ? expense.updatedAtFromNow?.tooltip : 'N/A' }>
                { expense.updatedAtEpoch ? expense.updatedAtFromNow?.display : 'N/A' }
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