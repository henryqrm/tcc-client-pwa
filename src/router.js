import About from '@/pages/About';
import Form from '@/pages/Form';
import SelectTable from '@/pages/select-table';
import Product from '@/pages/product';

import PurchaseOrder from '@/pages/purchase-orders';

export default [
  {
    path: '/purchase-orders',
    component: PurchaseOrder,
  },
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
    path: '/product/',
    component: Product,
  },
];
