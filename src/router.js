import About from '@/pages/about';
import CredCard from '@/pages/cred-card';
import SelectTable from '@/pages/select-table';
import Command from '@/pages/command';
import Product from '@/pages/product';

export default [
  {
    path: '/about/',
    component: About,
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
    path: '/cred-card/',
    component: CredCard,
  },
  {
    path: '/command',
    component: Command,
  },
];
