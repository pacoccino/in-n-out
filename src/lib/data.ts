export enum Direction { ON = 'ON', OFF = 'OFF' }
export enum Method { WIRE = 'WIRE', CREDIT_CARD = 'CREDIT_CARD', DEBIT_CARD = 'DEBIT_CARD' }

interface ProviderData {
  direction: Direction;
  countries: string[];
  methods: Method[];
  currencies: string[];
  providers: string[];
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
};

export const providersData: ProviderData[] = [
  {
    direction: Direction.OFF,
    providers: ['mooni'],
    countries: ['EU'],
    currencies: ['EUR', 'CHF'],
    methods: [Method.WIRE],
  },
  {
    direction: Direction.OFF,
    providers: ['transak'],
    countries: ['UK', 'INDIA'],
    currencies: ['INR', 'PND'],
    methods: [Method.WIRE],
  },
];
