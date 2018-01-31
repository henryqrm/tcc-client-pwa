import About from '@/pages/about';
import CredCard from '@/pages/cred-card';
import SelectTable from '@/pages/select-table';
import Command from '@/pages/command';
import Product from '@/pages/product';
import Home from '@/pages/home';
import App from '@/pages/app';
import Timer from '@/pages/timer';
import Feedback from '@/pages/feedback';

export default [
  {
    path: '/app',
    component: App,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/select-table',
    component: SelectTable,
  },
  {
    path: '/payment',
    component: CredCard,
  },
  {
    path: '/command',
    component: Command,
  },
  {
    path: '/timer',
    component: Timer,
  },
  {
    path: '/feedback',
    component: Feedback,
  },
];
