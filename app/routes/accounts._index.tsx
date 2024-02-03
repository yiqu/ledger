import { type MetaFunction } from "@remix-run/node";
import { useRouteLoaderData } from "@remix-run/react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { HeadersFunction } from "@remix-run/node";
import TitleBarLayout from "~/components/title/TitleBarLayout";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import type { Account } from "~/shared/models/account.model";
import { TitleNameDisplay } from "~/shared/components/Title";
import AccountsDisplay from "~/components/account/Accounts";
import type { HttpResponsePaged } from "~/shared/models/http.model";

export const meta: MetaFunction = (data) => {
  return [
    { title: "Accounts | Ledger" },
    { name: "description", content: "Summary of all accounts." },
  ];
};

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? 'public, no-cache, max-age=0',
});


function Accounts() {
  const { totalCount } = useRouteLoaderData("routes/accounts") as HttpResponsePaged<Account[]>;

  return (
    <Stack direction="column" justifyContent="center" alignItems="center" width="100%" spacing={ 3 }>
      <TitleBarLayout>
        <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
          <AccountBalanceIcon />
          <TitleNameDisplay name={ 'Accounts' } />
        </Stack>

        <Typography variant="h6" fontWeight={ 400 }>
          Total: { totalCount }
        </Typography>
      </TitleBarLayout>

      <AccountsDisplay />

    </Stack>
  );
}

export default Accounts;
