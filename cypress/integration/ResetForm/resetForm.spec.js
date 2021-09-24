describe("UI Elements", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3000");
  });

  it("Reset form", () => {
    for (let i = 1; i < 5; i++) {
      cy.getTestId("btn-secondary" + i).click();
    }
    cy.getTestId("btn-success-refresh")
      .click()
      .then(() => {
        for (let i = 1; i < 5; i++) {
          cy.getTestId("badge-warning" + i)
            .should("be.visible")
            .should("have.text", "Zero")
            .getTestId("shopping-cart-totalCounter")
            .should("have.text", 0);
        }
      });
  });
})