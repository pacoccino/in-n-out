import { Direction, Method } from './data';

export const textMappings = {
  direction: {
    [Direction.OFF]: 'Off-ramp',
    [Direction.ON]: 'On-ramp',
  },
  countries: {
    'EU': 'Europe',
    'US': 'United States',
    'IN': 'India',
    'UK': 'United Kingdom',
  },
  methods: {
    [Method.CREDIT_CARD]: 'Credit card',
    [Method.DEBIT_CARD]: 'Debit card',
    [Method.WIRE]: 'Bank transfer',
  },
};
