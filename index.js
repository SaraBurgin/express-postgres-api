const express = require('express');
const postgres = require('postgres');
const app = express();
const port = 3000;

const sql = postgres('postgres://express:express@localhost:5432/express');

app.get('/products', async (req, res) => {
  // await sql`
  //   INSERT INTO product
  //     (name, description, price)
  //   VALUES
  //     ('MacBook Pro', 'Laptop from Apple', 2300.00);
  // `;
  const response = await sql`
    SELECT * FROM product;
  `;
  res.send(
    response.map(product => product.id + ': ' + product.name).join('<br />'),
  );
});

app.listen(port, () => console.log('Example app listening on port ${port}!'));
