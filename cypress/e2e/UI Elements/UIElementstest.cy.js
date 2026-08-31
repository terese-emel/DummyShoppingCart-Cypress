describe("UI Elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays counter app homepage", () => {
    cy.title().should("eq", "Counter App");
  });

  it("all counts should be Zero by default", () => {
    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`badge-warning${i}`)
        .should("be.visible")
        .and("have.text", "Zero");
    }

    cy.getTestId("shopping-cart-totalCounter")
      .should("have.text", "0");
  });

  it("all elements on the page should be visible", () => {
    cy.getTestId("shopping-cart-totalCounter")
      .should("be.visible");

    cy.getTestId("btn-success-refresh")
      .should("be.visible")
      .and("be.enabled");

    cy.getTestId("btn-primary-recycle")
      .should("be.visible")
      .and("be.disabled");

    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`badge-warning${i}`)
        .should("be.visible");

      cy.getTestId(`btn-secondary${i}`)
        .should("be.visible")
        .and("be.enabled");

      cy.getTestId(`btn-info${i}`)
        .should("be.visible")
        .and("be.disabled");

      cy.getTestId(`btn-danger${i}`)
        .should("be.visible")
        .and("be.enabled");
    }
  });

  it("increment button should always be enabled", () => {
    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`btn-secondary${i}`)
        .should("be.enabled");

      cy.getTestId(`btn-secondary${i}`).click();

      cy.getTestId(`btn-secondary${i}`)
        .should("be.enabled");
    }
  });

  it("decrement button should be disabled when counter is empty", () => {
    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`badge-warning${i}`)
        .should("have.text", "Zero");

      cy.getTestId(`btn-info${i}`)
        .should("be.disabled");
    }
  });

  it("decrement button should be enabled when counter is not empty", () => {
    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`btn-secondary${i}`).click();

      cy.getTestId(`badge-primary${i}`)
        .should("have.text", "1");

      cy.getTestId(`btn-info${i}`)
        .should("be.enabled");
    }
  });

  it("should have correct Bootstrap styles", () => {
  cy.getTestId("shopping-cart-totalCounter")
  .should("have.class", "bg-secondary");

    cy.getTestId("btn-success-refresh")
      .should("have.class", "btn-success");

    cy.getTestId("btn-primary-recycle")
      .should("have.class", "btn-primary");

    for (let i = 1; i <= 4; i++) {
      cy.getTestId(`badge-warning${i}`)
        .should("have.class", "bg-warning");

      cy.getTestId(`btn-secondary${i}`)
        .should("have.class", "btn-secondary");

      cy.getTestId(`btn-info${i}`)
        .should("have.class", "btn-info");

      cy.getTestId(`btn-danger${i}`)
        .should("have.class", "btn-danger");
    }
  });
});