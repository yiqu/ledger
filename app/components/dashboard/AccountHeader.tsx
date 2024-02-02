import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { Link } from "@remix-run/react";
import Currency from "~/shared/components/Currency";
import { ellipsis } from "~/shared/utils/css.utils";

function AccountHeader({ name, total, count, accountId, totalInt, totalDecimal }: { name: string, total: number, count: number, accountId: string, totalInt: number, totalDecimal: string }) {

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 } p={ 2 } pb={ 0 }>
      <Typography variant="h5" title={ `${name}` } sx={ { ...ellipsis } } color="primary.main" fontWeight={ 500 }>
        <Link to={ `/accounts/${accountId}` }>{ name }</Link>
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" sx={ { ...ellipsis } } className="account-header-total">
        <Typography variant="h5" sx={ { ...ellipsis } } title={ `${total}` } fontWeight={ 500 } className={ total > 0 ? 'positive' : (total === 0 ? 'no-change' : 'negative') } letterSpacing="0.5px" component="div">
          <Currency integer={ totalInt } decimal={ totalDecimal } />
        </Typography>
        <Typography variant="body1" fontFamily="Roboto" title={ `${count} entries` } style={ { color: grey[600] } }>
          ({ count })
        </Typography>
      </Stack>
    </Stack>
  );
}

export default AccountHeader;