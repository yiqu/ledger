import AccountBalanceIconOutlined from '@mui/icons-material/AccountBalanceOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';

import SettingsIcon from '@mui/icons-material/Settings';
import SettingsIconOutlined from '@mui/icons-material/SettingsOutlined';

import { NavigationItem } from "~/shared/models/nav-item.model";

export const GET_LEFT_NAV_ITEMS = () => {
  const LEFT_NAV_ITEMS = [
    new NavigationItem('Dashboard', 'dashboard', ['/'], <DashboardOutlinedIcon color='primary' />),
    new NavigationItem('Data', 'data', ['/',  'data'], <FormatListBulletedOutlinedIcon color='primary' />),
    new NavigationItem('Banks', 'banks', ['/', 'banks'], <AccountBalanceIconOutlined color='primary' />),
    new NavigationItem('Settings', 'settings', ['/', 'settings'], <SettingsIconOutlined color='primary' />),
    new NavigationItem('About', 'about', ['/', 'about'], <InfoIconOutlined color='primary' />),
  ];
  return LEFT_NAV_ITEMS;
};

export const getFilledIcon = (pathName: string): JSX.Element => {
  switch (pathName) {
    case 'dashboard': {
      return <DashboardIcon color='primary' />;
    }
    case 'data': {
      return <FormatListBulletedIcon color='primary' />;
    }
    case 'banks': {
      return <AccountBalanceIcon color='primary' />;
    }
    case 'Settings': {
      return <SettingsIcon color='primary' />;
    }
    case 'about': {
      return <InfoIcon color='primary' />;
    }
  }
  return <>None</>;
};