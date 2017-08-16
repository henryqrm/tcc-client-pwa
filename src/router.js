import About from '@/pages/About';
import Form from '@/pages/Form';
import SelectTable from '@/pages/select-table';
import Command from '@/pages/command';

export default [
  {
    path: '/about/',
    component: About,
  },
  {
    path: '/select-table',
    component: SelectTable,
  },
  {
    path: '/form/',
    component: Form,
  },
  {
    path: '/command',
    component: Command,
  },
];
