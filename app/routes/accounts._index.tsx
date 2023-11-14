import { type MetaFunction } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { HeadersFunction } from "@remix-run/node";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import type { Account } from "~/shared/models/account.model";
import { TitleNameDisplay } from "~/shared/components/Title";
import AccountList from "~/components/account/AccountList";

export const meta: MetaFunction = (data) => {
  return [
    { title: "Accounts - Ledger" },
    { name: "description", content: "Summary of all accounts." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? 'public, no-cache, max-age=0',
});


function Accounts() {
  const accounts = useRouteLoaderData("routes/accounts") as Account[];

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <AccountBalanceIcon />
          <TitleNameDisplay name={ 'Accounts' } />
        </Stack>

        <Typography variant="h5" fontFamily="Poppins">
          Total: { accounts.length }
        </Typography>
      </TitleBarLayout>
      <AccountList accounts={ accounts } />
    </Stack>
  );
}

export default Accounts;
