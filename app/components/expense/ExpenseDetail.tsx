import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DateDisplay from "~/client/DateDisplay.client";
import type { Expense } from "~/shared/models/expense.model";


function ExpenseDetail({ expense }: { expense: Expense }) {

  return (
    <Card elevation={ 0 }>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            {expense.account.name[0] }
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={ <Typography variant="h5" fontWeight={ 500 } className="montserrat">${expense.amount.toLocaleString()}</Typography> }
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
              <td><DateDisplay date={ expense.date } displayType='shortAndNow' /></td>
            </tr>
            <tr>
              <td>Date added:</td>
              <td><DateDisplay date={ expense.dateAdded } displayType='shortAndNow' /></td>
            </tr>
            <tr>
              <td>Last Updated:</td>
              <td><DateDisplay date={ expense.updatedAt } displayType='shortAndNow' /></td>
            </tr>
            <tr>
              <td>ID:</td>
              <td>{expense.id}</td>
            </tr>
          </tbody> 
        </table>  
      </CardContent>
    </Card>
  );
}

export default ExpenseDetail;