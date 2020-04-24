
///<reference types="cypress" />

//http://localhost:3000/pizzamaker

describe("Form Test" , function() {
    it("Test Case", function() {
        cy.visit("http://localhost:3000/");
        cy.get('.sc-AxhUy').click();
        cy.get('#nameBox').type('Shawn') 
        cy.get('#pepperoniBox, #mushroomsBox, #spinachBox, #broccoliBox, #baconBox').check();
        cy.get('[for="pepperoniBox"]').contains('Pepperoni')
        cy.get('[for="mushroomsBox"]').contains('Mushrooms')
        cy.get('[for="spinachBox"]').contains('Spinach')
        cy.get('[for="broccoliBox"]').contains('Broccoli')
        cy.get('[for="baconBox"]').contains('Bacon')
        cy.wait(2000);
        cy.get('#outlined-basic').type('hello')
        cy.get('#dropDownBox').click()
        
        
    })
})







// cy.get('.sc-AxjAm').each((element, index, list) => {
//     element.check()
// });
// cy.get('.sc-AxgMl').each((element, index, list) => {
//     element.checked()