describe('E-commerce Flow Test', () => {
    it('should complete purchase flow with Broccoli', () => {
        // Step 1: Visit the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Step 2: Search for 'Brocolli'
        const searchKeyword = 'Brocolli';
        cy.get('.search-keyword')
            .should('be.visible') // Assert search bar is visible
            .type(searchKeyword); // Type search keyword
        cy.wait(1000); // Wait for search results to load

        // Step 3: Verify product count
        cy.get('.quantity').should('have.length', 1); // Ensure only one product is found

        // Step 4: Increase quantity
        cy.get('.increment').click().click(); // Click increment button twice to add quantity

        // Step 5: Add to cart
        cy.get('.product-action > button')
            .should('be.visible')
            .contains('ADD TO CART')
            .click(); // Click 'Add to Cart'

        // Step 6: Verify product has been added
        cy.get('.product-action > button', { timeout: 10000 })
            .should('contain', 'ADDED'); // Assert button text has changed to 'ADDED'

        // Step 7: Access cart
        cy.get('[alt="Cart"]').click(); // Click the cart icon

        // Step 8: Proceed to checkout
        cy.get('button').contains('PROCEED TO CHECKOUT').click(); // Click proceed to checkout button

        // Step 9: Verify product in checkout
        cy.get('.product-name').contains('Brocolli').should('be.visible'); // Ensure Broccoli is visible

        // Step 10: Apply promo code
        const promoCode = 'test';
        cy.get('.promocode').type(promoCode); // Type promo code
        cy.get('.promoBtn').click(); // Click apply promo button
        cy.wait(1000); // Wait for validation message

        // Step 11: Verify invalid promo code message
        cy.get('.promoInfo').contains('Invalid code ..!').should('be.visible'); // Assert message is visible

        // Step 12: Place the order
        cy.get('#root > div > div > div > div > button').click(); // Click 'Place Order' button

        // Step 13: Select country
        cy.get('#root > div > div > div > div > div > select > option:first').click({ force: true }); // Select the first country option

        // Step 14: Agree to terms
        cy.get('#root > div > div > div > div > input').check(); // Check terms and conditions box

        // Step 15: Finalize the order
        cy.get('#root > div > div > div > div > button').click(); // Click 'Proceed' button

        // Step 16: Wait for completion confirmation
        cy.get('body > script:nth-child(2)').wait(5000).should('exist'); // Ensure that order processing script is present
    });
});