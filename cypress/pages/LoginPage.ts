class LoginPage {
  usernameInput() {
    return cy.get('#user-name');
  }

  passwordInput() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login-button');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  login(username: string, password: string) {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password);
    this.loginButton().click();
  }
}

export default new LoginPage();