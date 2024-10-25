describe('Automation Practice Form', () => {
    it('Fills out and submits the form', () => {
        // 1. Navigate to the website and assert the URL contains 'demoqa'
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include', 'demoqa');

        // 2. Type first and last names
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');

        // 3. Type email address
        cy.get('#userEmail').type('johndoe@example.com');

        // 4. Select Gender
        cy.get('input[name="gender"][value="Male"]').check({ force: true });

        // 5. Type mobile number
        cy.get('#userNumber').type('1234567890');

        // 6. Select hobbies
        cy.get('input[id="hobbies-checkbox-1"]').check({ force: true }); // Sports
        cy.get('input[id="hobbies-checkbox-2"]').check({ force: true }); // Reading

        // 7. Type current address
        cy.get('#currentAddress').type('123 Main St, Springfield, USA');

        // 8. Click on Submit button
        cy.get('#submit').click();

        // 9. Assert that "Thanks for submitting the form" is visible
        cy.get('.modal-content').should('be.visible');
        cy.contains('Thanks for submitting the form').should('be.visible');

        // 10. Click on Close button with force option
        cy.get('#closeLargeModal').click({ force: true });
    });
});