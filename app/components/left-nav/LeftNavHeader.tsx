import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dollarLogo from '../../../public/images/dollar.png';
import moneylogo from '../../../public/images/money.png';
import { DrawerHeader } from '../layouts/LayoutComponents';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import type { LeftNavHeaderProps } from '~/shared/models/nav-item.model';
import { flexCenter } from '~/shared/utils/css.utils';
import { getRandomArbitrary } from '~/shared/utils/number.utils';
import { APP_TITLE } from '~/constants/title';


const LOGO_LIST = [dollarLogo, moneylogo];

function LeftNavHeader({ closeDrawerHandler }: LeftNavHeaderProps) {

  const leftNavTitle = APP_TITLE;
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerClose = () => {
    closeDrawerHandler(false);
  };

  const [displayLogo, setDisplayLogo] = useState(dollarLogo);

  useEffect(() => {
    setDisplayLogo(LOGO_LIST[getRandomArbitrary(0, LOGO_LIST.length - 1)]);
  }, [location.pathname]);

  return (
    <DrawerHeader>
      <Link to={ "/" } style={ { color: '#000' } }>
        <Stack direction="row" sx={ { ...flexCenter } }>
          <Typography component="img" src={ displayLogo } sx={ { height: '2rem', mr: '10px' } } alt="logo"></Typography>
          <Typography variant='h6' fontFamily="Poppins"
            sx={ { color: (theme) => theme.palette.mode === 'light' ? 'primary.main' : 'white' } }>{ leftNavTitle }</Typography>
        </Stack>
      </Link>

      <IconButton onClick={ handleDrawerClose }>
        { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
      </IconButton>
    </DrawerHeader>
  );
}

export default LeftNavHeader;