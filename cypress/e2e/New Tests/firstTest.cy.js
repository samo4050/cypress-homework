describe('Test Demoqa Webtables sections', () => {


    it('Test add user functionality', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Test first name')
        cy.get('#lastName').type('Test last name')
        cy.get('#userEmail').type('test@gmail.com')
        cy.get('#age').type('764')
        cy.get('#salary').type('3671631693')
        cy.get('#department').type('Tesvan', { force: true })
    })

})