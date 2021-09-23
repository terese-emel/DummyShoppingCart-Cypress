describe("Delete items", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001");
  });

  it("Delete all items from the application", () => {
    // remove items from the application
    cy.get('div.row:contains("Zero")').should("have.length", 4);

    for (let i = 1; i < 5; i++) {
      cy.getTestId("btn-danger" + i).click({ multiple: true });
    }

    // Verify all items removed from the application
    cy.get('div.row:contains("Zero")').should("have.length", 0);
  });

  it("Delete all items from the application except one", () => {
    // remove items from the application

    for (let i = 1; i < 4; i++) {
      cy.getTestId("btn-danger" + i).click();
    }
    // Verify an existing item removed from the application
    cy.get('div.row:contains("Zero")').should("have.length", 1);
  });
});
