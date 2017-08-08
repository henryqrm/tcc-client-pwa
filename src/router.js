import About from '@/pages/About';
import Form from '@/pages/Form';

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
    path: '/form/',
    component: Form,
  },
];
