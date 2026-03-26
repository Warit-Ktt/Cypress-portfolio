# Cypress Automation Testing Portfolio

This repository contains my automation testing portfolio using Cypress. It demonstrates my ability to design and implement automated end-to-end (E2E) tests for web applications using modern automation testing tools and best practices.

## Overview

This project includes automated test scenarios designed to validate core functionality of web applications. The tests simulate user behavior and verify system reliability, functionality, and stability.

## Learning Source

This project was developed as part of my automation testing training from the **Software testing by P’Beam**.

Through this course, I gained hands-on experience in:

* Writing automated end-to-end tests using Cypress
* Structuring test cases and test suites
* Using fixtures and custom commands
* Generating test reports with Mochawesome
* Applying automation testing best practices

## Tools and Technologies

* Cypress
* JavaScript
* Node.js
* GitHub

## Project Structure

```
Cypress-portfolio/
│
├── cypress/
│   ├── e2e/              # Contains Cypress test scripts
│   ├── fixtures/         # Test data (example.json, user.json)
│   ├── support/          # Custom Cypress commands and configuration
│   └── results/          # Generated test results (ignored in .gitignore)
│
├── cypress.config.js     # Cypress configuration file
├── package.json          # Project dependencies and scripts
├── package-lock.json     # Dependency lock file
├── README.md             # Project documentation
├── .gitignore            # Git ignore rules
```

## Test Scenarios

Examples of automated test scenarios included:

* User login validation
* UI element verification
* Page navigation testing
* Form input and submission testing
* Functional workflow testing

## Installation

Clone the repository:

```
git clone https://github.com/Warit-Ktt/Cypress-portfolio.git
```

Install dependencies:

```
npm install
```

## Running Tests

Open Cypress Test Runner:

```
npx cypress open
```

Run tests in headless mode:

```
npx cypress run
```

## Test Reports

This project uses Mochawesome Reporter to generate detailed test execution reports.

## Purpose of This Portfolio

This portfolio demonstrates my ability to:

* Develop automated E2E tests using Cypress
* Design structured and maintainable test cases
* Apply automation testing best practices
* Work with modern QA tools and automation frameworks

## Author

Warit
GitHub: https://github.com/Warit-Ktt
