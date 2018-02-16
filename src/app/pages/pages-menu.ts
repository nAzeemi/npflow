import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Programs',
    icon: 'ion-ios-calendar-outline',
    children: [
      {
        title: 'Check-in',
        link: '/pages/programs/check-in',
      },
      {
        title: 'Sign-up',
        link: '/pages/programs/sign-up',
      },
      {
        title: 'Calendar',
        link: '/pages/programs/calendar',
      },
      {
        title: 'Manage',
        link: '/pages/programs/manage',
      },
    ],
  },
  {
    title: 'People',
    icon: 'ion-ios-people-outline',
    children: [
      {
        title: 'Person',
        link: '/pages/people/person',
      },
      {
        title: 'Family',
        link: '/pages/people/family',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
