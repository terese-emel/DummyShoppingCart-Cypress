
describe("Add items to the cart and verify total items in the cart", () => {
  
   // Reusable helpers from lodash functions
  
  // Cypress._.isFinite() checks text equates to a number
  const isNumeric = (cell) => Cypress._.isFinite(+cell.textContent);
  
    //Cypress._.filter() selects cells that meet the criteria
  const filterNumeric = (cells$) => Cypress._.filter(cells$, isNumeric);
  
 // Cypress_.map() for converting elements to text and text to numbers
  const toStrings = (cells$) => Cypress._.map(cells$, "textContent");
  const toNumbers = (texts) => Cypress._.map(texts, Number);
  
  // Cypress_.sum() for reducing an array of numbers to a total
  const sum = (numbers) => Cypress._.sum(numbers);
  
  //if you want to compose multiple functions into one, use Cypress._.flow()
  const sumAgeValues = Cypress._.flow([toStrings, toNumbers, sum]);
  
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001");
  });


  it("Add at least one from all available items to the cart", () => {
    cy.get(".row").find(".btn-secondary").click({ multiple: true });

    cy.get(".badge-primary")
      .then(filterNumeric)
      .then(sumAgeValues)
      .then((cellsTotal) => {
         cy.getTestId("shopping-cart-totalCounter")
           .then(sumAgeValues)
           .should("eq", cellsTotal);
      });
  });

 it("Add multiple items multiple times to the cart and verify total count", () => {
   for (let i = 1; i < 5; i++) {
     cy.getTestId("btn-secondary" + i).click({ multiple: true });
   }
   cy.getTestId("badge-primary"+ i)
     .then(filterNumeric)
     .then(sumAgeValues)
     .then((cellsTotal) => {
       cy.get(".badge-pill").then(sumAgeValues).should("eq", cellsTotal);
     });
     
 });
});
