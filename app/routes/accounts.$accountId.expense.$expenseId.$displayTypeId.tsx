import DialogContent from "@mui/material/DialogContent";
import DialogLayout from "~/shared/dialog/DialogLayout";
import { useMatch, useNavigate, useParams } from "@remix-run/react";


function AccountDetailExpenseDisplay() {
  const { accountId, displayTypeId, expenseId } = useParams();
  const match = useMatch('/accounts/:accountId/expense/:expenseId/:displayTypeId');
  const nav = useNavigate();

  const handleCloseDetail = () => {
    if (accountId) {
      nav(`/accounts/${accountId}`);
    } else {
      nav(`/accounts`);
    }
  };

  return (
    <DialogLayout open={ Boolean(match) } onClose={ handleCloseDetail } title={ `Title` } maxWidth="xs"
      id="account-detail-expense-display-dialog">
      <DialogContent>
        AA
      </DialogContent>
    </DialogLayout>
  );
}

export default AccountDetailExpenseDisplay;