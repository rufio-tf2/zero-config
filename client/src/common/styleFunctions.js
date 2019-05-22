import { compose, style } from '@material-ui/system';

export const overflow = compose(
  style({
    prop: 'overflow',
  }),
  style({
    prop: 'overflowX',
  }),
  style({
    prop: 'overflowY',
  }),
);
