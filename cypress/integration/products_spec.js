// Create a test suite for the products page

describe('Products page', () => {
  // Test the links to the single products page
  it('has links to single product page', () => {
    //Go to the products page URL
    cy.visit(
      '/products',
    ); /*http-> protocol, localhost-> host, :3000-> port, /products-> path , ?id=1-> query */
    //Get the first link element and click on it
    cy.get('[data-cy=product-link-1]').click();

    // Should be on a new URL which includes the product page
    // The resulting URL should include the query single product path
    cy.url().should('include', '/products?id=1');
  });
});

describe('Product page', () => {
  // Test the links to the products page
  it('has link to products page', () => {
    // Go to the single product page URL
    cy.visit('/products?id=1');
    // Get the stated link element and click on it
    cy.get('[data-cy=products-link]').click();
    // The URL that is clicked equals the URL introduced below
    // Do not use includes, as the page we are in when clicking actually includes "/products"
    cy.url().should('eq', 'http://localhost:3000/products');
  });
});
