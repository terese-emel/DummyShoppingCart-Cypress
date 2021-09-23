var chaiColors = require("chai-colors");
chai.use(chaiColors);

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

  it("all the counts should be Zero by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('div.row:contains("Zero")').should("have.length", 4);
    cy.getTestId("shopping-cart-totalCounter").should("have.text", 0);
  });

  it("all elements on the page should be visible", () => {
    // We use the `cy.getTestId()` command to get all elements that match the selector `[data-test-id = "${value}"]`.
    cy.getTestId("shopping-cart-totalCounter").should("be.visible");

    cy.getTestId("btn-success-refresh")
      .should("be.visible")
      .and("not.have.attr", "disabled");

    cy.getTestId("btn-primary-recycle")
      .should("be.visible")
      .and("have.attr", "disabled");

    for (let i = 1; i < 5; i++) {
      cy.getTestId("badge-warning" + i).should("be.visible");
      cy.getTestId("btn-secondary" + i).should("be.visible");
      cy.getTestId("btn-info" + i)
        .should("be.visible")
        .and("have.attr", "disabled");
      cy.getTestId("btn-danger" + i).should("be.visible");
    }
  });

  it("btn-secondary should be enabled regardless of the count", () => {
    for (let i = 1; i < 3; i++) {
      cy.getTestId("btn-secondary" + i).click();
    }
    if (
      cy.get(".badge-warning").contains("Zero") ||
      cy.get(".badge-primary").should("be.visible")
    ) {
      cy.get(".btn-secondary")
        .should("be.visible")
        .should("not.have.attr", "disabled");
    }
  });
  it("btn-info should be disabled if the counter is empty", () => {
    for (let i = 1; i < 5; i++) {
      if (cy.getTestId("badge-warning" + i).contains("Zero")) {
        cy.getTestId("btn-info" + i)
          .should("be.visible")
          .should("have.attr", "disabled");
      }
    }
  });
  it("btn-info should be enabled if the counter is not empty", () => {
    for (let i = 1; i < 5; i++) {
      cy.getTestId("btn-secondary" + i).click();
    }
    for (let i = 1; i < 5; i++) {
      if (cy.getTestId("badge-primary" + i).should("be.visible")) {
        cy.getTestId("btn-info" + i)
          .should("be.visible")
          .should("not.have.attr", "disabled");
      }
    }
  });

  it("should have background color for each elements", () => {
    cy.getTestId("shopping-cart-totalCounter")
      .should("have.css", "background-color")
      .and("be.colored", "#17a2b8");

    cy.getTestId("btn-success-refresh")
      .should("have.css", "background-color")
      .and("be.colored", "#28a745");

    cy.getTestId("btn-primary-recycle")
      .should("have.css", "background-color")
      .and("be.colored", "#007bff");

    cy.get(".badge-warning")
      .should("have.css", "background-color")
      .and("be.colored", "#ffc107");

    cy.get(".btn-secondary")
      .should("have.css", "background-color")
      .and("be.colored", "#6c757d");

    cy.get(".btn-info")
      .should("have.css", "background-color")
      .and("be.colored", "#17a2b8");

    cy.get(".btn-danger")
      .should("have.css", "background-color")
      .and("be.colored", "#dc3545");
  });
});
