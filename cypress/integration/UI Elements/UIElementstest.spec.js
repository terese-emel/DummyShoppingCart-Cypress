describe("UI Elements", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001");
  });

  it("Displays counter app homepage", () => {
    cy.title().should("eq", "Counter App");
  });

  it("displays four items with count as zero by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    cy.get('div.row:contains("Zero")').should("have.length", 4);
  });

  it("btn-info disabled if the counter is empty", () => {
    for (let i = 1; i < 5; i++) {
      cy.get("[data-test-id = 'btn-info" + i + "']")
        .should("have.attr", "disabled")
        .should("have.backgroundColor", "#17a2b8");
    }
  });
  it("btn-info enabled if the counter is not empty", () => {
    for (let i = 1; i < 5; i++) {
      cy.get("[data-test-id = 'btn-secondary" + i + "']").click();
    }
    for (let i = 1; i < 5; i++) {
      cy.get("[data-test-id = 'btn-info" + i + "']")
        .should("not.have.attr", "disabled")
        .should("have.backgroundColor", "#17a2b8");
    }
  });

  it("Recycle button visible", () => {
    cy.get('[data-test-id = "btn-primary-recycle"]')
      .should("be.visible")
      .should("have.attr", "disabled");
  });

  it("Reset form", () => {
    for (let i = 1; i < 5; i++) {
      cy.get("[data-test-id = 'btn-secondary" + i + "']").click();
    }
    cy.get('[data-test-id="btn-success-refresh"]')
      .click()
      .next()
      .get("div.row")
      .should("have.length", 4)
      .should("contain", "Zero")
      .get('[data-test-id = "shopping-cart-totalCounter"]')
      .should("have.text", 0);
  });
});
