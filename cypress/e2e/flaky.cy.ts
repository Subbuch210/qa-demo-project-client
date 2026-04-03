describe('Flaky test example and fix', () => {
  it('bad example using hard wait', () => {
    cy.visit('https://www.saucedemo.com/');

    // Bad practice: unnecessary hard waits can make tests slow and unstable
    cy.wait(3000);
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.wait(2000);

    cy.contains('Products').should('be.visible');
    cy.screenshot('flaky-test-bad-example');
  });

  it('better example using proper assertions and Cypress retry', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').should('be.visible').type('standard_user');
    cy.get('#password').should('be.visible').type('secret_sauce');
    cy.get('#login-button').should('be.enabled').click();

    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
    cy.get('.inventory_list').should('be.visible');

    cy.screenshot('flaky-test-stable-example');
  });
});