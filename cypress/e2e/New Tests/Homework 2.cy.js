describe('Shopping Cart Functionality', () => {
    it('should add Broccoli to the cart and proceed to checkout', () => {
        // 1. Navigate to the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // 2. Search "Broccoli" and assert "Broccoli" product is visible in results with count 1
        cy.get('.search-keyword').type('Broccoli');
        cy.get('.products').find('.product').should('have.length', 1);
        cy.get('.products').find('.product').contains('Broccoli').should('be.visible');

        // 4. Click on the + icon twice and assert count is 3
        cy.get('.products').find('.product').contains('Broccoli').parent().find('.increment').click().click();
        cy.get('.products').find('.product').contains('Broccoli').parent().find('.quantity').should('have.value', '3');

        // 5. Click "Add to cart button" and assert "Added" is visible on the button
        cy.get('.products').find('.product').contains('Broccoli').parent().find('button').click();
        cy.get('.products').find('.product').contains('Broccoli').parent().find('button').should('contain', 'Added');

        // 6. Click on the cart icon in the top right corner
        cy.get('.cart-icon').click();

        // 7. Assert that Broccoli is visible on the opened overlay
        cy.get('.cartItem').should('contain', 'Broccoli');

        // 8. Click the "Proceed to checkout" button
        cy.get('.btn-proceed').click();

        // 9. Assert that Broccoli is visible under the Product name column
        cy.get('tr').should('contain', 'Broccoli');

        // 10. Type "test" in the promo code field and wait to apply
        cy.get('.promoCode').type('test');

        // 11. Assert "Invalid code ..!" validation message is visible
        cy.get('.promoBtn').click(); // Click the apply button
        cy.get('.promoInfo').should('contain', 'Invalid code ..!');

        // 12. Click on the "Place Order" button
        cy.get('.place-order').click();

        // 13. Select country
        cy.get('#country').type('India'); // or another country of your choice
        cy.get('.suggestions > ul > li').contains('India').click();

        // 14. Agree to Terms and Conditions
        cy.get('#checkbox').check();

        // 15. Click on the "Proceed" button
        cy.get('.btn.btn-success').click();

        // 16. Assert "Thank you ..." message is visible.
        cy.get('.alert').should('contain', 'Thank you for the order');
    });
});
