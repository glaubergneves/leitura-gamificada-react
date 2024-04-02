describe("test filther title", () => {
  beforeEach(() => {
    cy.request('GET', 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json')
      .its('body')
      .as('books');
    });
    
    it("test filter", () => {
      cy.visit("/books");
    cy.get('input[placeholder="Filtrar por título"]').type("1984");
  });
});
