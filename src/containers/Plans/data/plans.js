import { PRICE_AVERAGE, PRICE_MAX, PRICE_MIN } from '../ducks';

export default {
  [PRICE_AVERAGE]: {
    id: PRICE_AVERAGE,
    description:
      'Thank you for appreciating our work, this price, which will allow us to cover our expenses, to develop and create new products for users around the world.',
    title: 'Average Price',
  },
  [PRICE_MAX]: {
    id: PRICE_MAX,
    description:
      'You are a hero! Thank you for your choice, we will send some of this money to charity and try to help those who need it. Let us  make this world better together.',
    title: 'Maximum Price',
  },
  [PRICE_MIN]: {
    id: PRICE_MIN,
    description:
      'Dear friend, we understand that sometimes developers have hard times. And we are ready to provide the minimum cost of our products to those who really need it.',
    title: 'Minimum Price',
  },
};
