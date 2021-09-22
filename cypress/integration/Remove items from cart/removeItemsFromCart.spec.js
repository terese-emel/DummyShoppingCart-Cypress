describe("Remove items from cart", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001");
    
  });
 it("Add one item and remove that from the cart", () => {
   cy.get('[data-test-id = "badge-warning1"]')
     .should("have.text", "Zero");
    
   cy.get('[data-test-id = "btn-secondary1"]')
     .click();
   
   cy.get('[data-test-id = "btn-info1"]')
     .click();
   
   cy.get('[data-test-id = "badge-warning1"]')
     .should("have.text", "Zero");
     
   cy.get('[data-test-id = "shopping-cart-totalCounter"]')
     .should("have.text", 0);
 
  });
  

  it("Remove multiple items added to the cart", () => {
  
    for (let i = 1; i < 5; i++) {
      cy.get("[data-test-id = 'btn-secondary" + i + "']")
        .click();
    }
     for (let i = 1; i < 5; i++) {
       cy.get("[data-test-id = 'btn-info" + i + "']")
         .click();
       cy.get("[data-test-id = 'badge-warning" + i + "']")
         .should("have.text", 'Zero');
     }
    cy.get('[data-test-id = "shopping-cart-totalCounter"]')
      .should("have.text", 0);
    
  });

   it("Remove all items from the cart except one", () => {
     for (let i = 1; i < 5; i++) {
       cy.get("[data-test-id = 'btn-secondary" + i + "']")
         .click();
     }
     for (let i = 1; i < 4; i++) {
       cy.get("[data-test-id = 'btn-info" + i + "']")
         .click();
       cy.get("[data-test-id = 'badge-warning" + i + "']")
         .should("have.text", "Zero");
     }
     cy.get('[data-test-id = "badge-primary4"]')
       .should("have.text", 1);
     cy.get('[data-test-id = "shopping-cart-totalCounter"]')
       .should("have.text", 1);
   });
  
});