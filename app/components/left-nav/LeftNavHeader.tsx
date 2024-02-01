import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import notesLogo from '../../../public/images/notes.png';
import { DrawerHeader } from '../layouts/LayoutComponents';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import type { LeftNavHeaderProps } from '~/shared/models/nav-item.model';
import { flexCenter } from '~/shared/utils/css.utils';
import { APP_TITLE } from '~/constants/title';
import { useNavigationType } from '~/shared/hooks/useNavigationType';

function LeftNavHeader({ closeDrawerHandler }: LeftNavHeaderProps) {
  const { isNormalLoad, isActionReload, isActionRedirect, isReloading, isActionSubmission, isLoaderSubmission, isLoaderSubmissionRedirect } = useNavigationType();
  const showProgress = isNormalLoad || isActionSubmission || isLoaderSubmission || isLoaderSubmissionRedirect || isReloading || isActionReload || isActionRedirect;
  const leftNavTitle = APP_TITLE;
  const theme = useTheme();

  const handleDrawerClose = () => {
    closeDrawerHandler(false);
  };

  return (
    <DrawerHeader>
      <Link to={ "/" } style={ { color: '#000' } }>
        <Stack direction="row" sx={ { ...flexCenter } }>
          <img src={ notesLogo } style={ { height: '2rem', marginRight: '10px' } } alt="logo" className={ showProgress ? 'fade-in-out-animate' : '' } />
          <Typography variant='h5'
            sx={ { color: (theme) => theme.palette.mode === 'light' ? 'text.primary' : 'white' } }>{ leftNavTitle }</Typography>
        </Stack>
      </Link>

      <IconButton onClick={ handleDrawerClose }>
        { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
      </IconButton>
    </DrawerHeader>
  );
}

export default LeftNavHeader;