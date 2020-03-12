const products = [
  {
    name: 'Brita bottle',
    description: 'Filter water bottle',
    price: 22.0,
  },

  {
    name: 'Tiger Notebook',
    description: 'Laptop from apple',
    price: 4.0,
  },

  {
    name: 'MacBook Air',
    description: 'Laptop from Apple',
    price: 1600.0,
  },
];

exports.up = async function(sql) {
  console.log('Inserting products in to products table...');

  await sql`
    INSERT INTO products ${sql(products, 'name', 'description', 'price')};
  `;
};

exports.down = async function(sql) {
  console.log('Deleting products from products table...');
  await sql`
    DELETE from products
      WHERE name in (${products.map(product => product.name)});

  `;
};
