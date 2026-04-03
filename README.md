# qa-demo-project-client
QA automation project demonstrating UI testing, API validation, and flaky test improvement using Cypress, TypeScript, and Page Object Model

# QA Release Stability Demo

This project demonstrates a practical QA automation setup using Cypress, TypeScript, and Page Object Model.

## What this project covers
- UI automation for login flow
- API validation using Cypress request
- Flaky test example and improved version
- Simple maintainable structure using Page Object Model

## Tech Stack
- Cypress
- TypeScript
- Mocha
- Page Object Model

## Project Structure
- `cypress/e2e/login.cy.ts` - login test scenarios
- `cypress/e2e/api.cy.ts` - API validation scenarios
- `cypress/e2e/flaky.cy.ts` - flaky test example and fix
- `cypress/pages/LoginPage.ts` - page object for login page

## How to run
```bash
npm install
npx cypress open