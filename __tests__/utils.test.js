const { generateProductLink, generateSingleProductData } = require('../utils');

test('generates a product link', () => {
  const product = {
    id: 1,
    name: 'MacBook Pro',
    description: 'Laptop from Apple',
    price: '2400.00',
  };
  expect(generateProductLink(product)).toBe(
    `1: <a href="/products?id=1" data-cy="product-link-1">MacBook Pro</a>`,
  );
});

test('generates the single product data', () => {
  const product = {
    id: 3,
    name: 'chair',
    description: 'nice chair',
    price: '2424',
  };

  expect(generateSingleProductData(product)).toMatchSnapshot();
});
