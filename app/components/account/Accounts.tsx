import { useRouteLoaderData } from "@remix-run/react";
import type { Account } from "~/shared/models/account.model";
import AccountList from "./AccountList";
import Empty from "../no-result/Empty";

function Accounts() {
  const accounts = useRouteLoaderData("routes/accounts") as Account[];

  if (accounts.length < 1) {
    return (
      <Empty type='account' />
    );
  }

  return (
    <AccountList accounts={ accounts } />
  );
}

export default Accounts;