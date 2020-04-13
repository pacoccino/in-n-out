export enum Direction { ON = 'ON', OFF = 'OFF' }
export enum Method { WIRE = 'WIRE', CREDIT_CARD = 'CREDIT_CARD', DEBIT_CARD = 'DEBIT_CARD' }

interface ProviderData {
  direction: Direction;
  countries: string[];
  methods: Method[];
  currencies: string[];
  providers: string[];
  kycLess?: boolean;
}

export const providers = {
  mooni: {
    name: 'Mooni',
    url: 'https://app.mooni.tech',
  },
  transak: {
    name: 'Transak',
    url: 'https://transak.io',
  },
  monolith: {
    name: 'Monolith',
    url: 'https://monolith.xyz',
  },
  ramp: {
    name: 'Ramp',
    url: 'https://ramp.network',
  },
  moonpay: {
    name: 'MoonPay',
    url: 'https://www.moonpay.io',
  },
  wyre: {
    name: 'Wyre',
    url: 'https://www.sendwyre.com',
  },
  bity: {
    name: 'Bity',
    url: 'https://bity.com',
  },
};

export const providersData: ProviderData[] = [
  {
    direction: Direction.OFF,
    providers: ['mooni'],
    countries: ['EU'],
    currencies: ['EUR', 'CHF'],
    methods: [Method.WIRE],
    kycLess: true,
  },
  {
    direction: Direction.ON,
    providers: ['transak'],
    countries: ['UK', 'IN'],
    currencies: ['INR', 'GBP', 'EUR'],
    methods: [Method.WIRE],
  },
  {
    direction: Direction.OFF,
    providers: ['monolith'],
    countries: ['EU'],
    currencies: ['EUR', 'GBP'],
    methods: [Method.DEBIT_CARD],
  },
  {
    direction: Direction.ON,
    providers: ['ramp'],
    countries: ['EU', 'UK'],
    currencies: ['EUR', 'GBP'],
    methods: [Method.WIRE],
  },
  {
    direction: Direction.ON,
    providers: ['moonpay'],
    countries: ['EU', 'US', 'UK'],
    currencies: ['EUR', 'USD', 'GBP'],
    methods: [Method.WIRE, Method.CREDIT_CARD],
  },
  {
    direction: Direction.ON,
    providers: ['wyre'],
    countries: ['US', 'UK', 'EU'],
    currencies: ['USD', 'GBP', 'EUR'],
    methods: [Method.CREDIT_CARD],
  },
  {
    direction: Direction.ON,
    providers: ['bity'],
    countries: ['EU'],
    currencies: ['EUR', 'CHF'],
    methods: [Method.WIRE],
    kycLess: true,
  },
  {
    direction: Direction.OFF,
    providers: ['bity'],
    countries: ['EU'],
    currencies: ['EUR', 'CHF'],
    methods: [Method.WIRE],
    kycLess: true,
  },
];
