import LoginPage from '../pages/LoginPage';

describe('Login functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
    cy.get('.inventory_list').should('be.visible');
    cy.screenshot('successful-login');
  });

  it('should show error with invalid credentials', () => {
    LoginPage.login('locked_user123', 'wrong_password');
    LoginPage.errorMessage().should('be.visible');
    cy.screenshot('invalid-login-error');
  });
});