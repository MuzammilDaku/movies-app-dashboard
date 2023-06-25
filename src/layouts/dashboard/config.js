import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import Pencil from '@heroicons/react/24/solid/PencilIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import Trash from '@heroicons/react/24/solid/TrashIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import Plus from '@heroicons/react/24/solid/PlusIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Add a Movie',
    path: '/add-a-movie',
    icon: (
      <SvgIcon fontSize="small">
        <Plus />
      </SvgIcon>
    )
  },
  {
    title: 'Delete A Movie',
    path: '/delete-a-movie',
    icon: (
      <SvgIcon fontSize="small">
        <Trash />
      </SvgIcon>
    )
  },
  {
    title: 'Update A Movie',
    path: '/update-a-movie',
    icon: (
      <SvgIcon fontSize="small">
        <Pencil />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Error',
    path: '/404',
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    )
  }
];
