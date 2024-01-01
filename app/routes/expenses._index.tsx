import type { HeadersFunction } from "@remix-run/node";
import { type MetaFunction } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import type { HttpResponsePaged } from "~/shared/models/http.model";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import type { Expense } from "~/shared/models/expense.model";
import { TitleNameDisplay } from "~/shared/components/Title";
import Expenses from "~/components/expense/Expenses";


export const meta: MetaFunction = (data) => {
  return [
    { title: "Expenses - Ledger" },
    { name: "description", content: "Summary of all expenses." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": 'public, no-cache, max-age=0',
});

function ExpensesLanding() {
  const { totalCount } = useRouteLoaderData("routes/expenses") as HttpResponsePaged<Expense[]>;

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <FormatListBulletedIcon />
          <TitleNameDisplay name={ 'Expenses' } />
        </Stack>

        <Typography variant="h5" fontFamily="Poppins">
          Total: { totalCount }
        </Typography>
      </TitleBarLayout>

      <Expenses />

    </Stack>
  );
}

export default ExpensesLanding;