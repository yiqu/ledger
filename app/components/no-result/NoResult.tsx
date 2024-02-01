import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "@remix-run/react";
import noresultlogo from '../../../public/images/emptybox.png';
import noresultquerylogo from '../../../public/images/no-results.png';

interface NoResultProps {
  type?: 'account' | 'expense';
}

function NoResult({ type }: NoResultProps) {
  const [searchParams] = useSearchParams();
  const searchParam: string | null = searchParams.get('q');
  let typedMessage = 'No results found.';
  if (type) {
    switch (type) {
      case 'account': {
        typedMessage = 'No accounts found.';
        break;
      }
      case 'expense': {
        typedMessage = 'No expenses found.';
        break;
      }
    }
  }

  const notFoundText = searchParam ? `No results matched your search: '${searchParam}'` : `${typedMessage}`;

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 3 }>
      <Typography component="img" src={ searchParam ? noresultquerylogo : noresultlogo } sx={ { height: '5rem' } } alt="logo"></Typography>

      <Typography variant="h4" >
        { notFoundText }
      </Typography>
    </Stack>
  );
}

export default NoResult;