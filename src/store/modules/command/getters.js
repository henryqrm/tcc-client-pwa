import { STATUS_FREE } from '@/constants';

export default {
  isOccupied: state => state.status !== STATUS_FREE,
};
