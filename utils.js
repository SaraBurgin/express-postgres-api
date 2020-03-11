function generateProductLink(product) {
  return `${product.id}: <a href="/products?id=${product.id}" data-cy="product-link-${product.id}">${product.name}</a>`;
}
function generateSingleProductData(product) {
  return (
    product.id +
    ': ' +
    product.name +
    '<br />' +
    product.description +
    '<br /><a href="/products" data-cy=products-link>Back to Products</a>'
  );
}

module.exports = {
  //Key and value will both be the same, if they are different, you write them generateSingleProductData: generateSingleProductData
  generateProductLink,
  generateSingleProductData,
};
