/// <reference types="cypress" />

import { APPLICATION_URL, Rpn } from "../model";

const rpn = new Rpn();

describe("Test of Counter", () => {
  beforeEach(() => {
    cy.visit(APPLICATION_URL);
  });

  it("The test is showing a test", () => {
    cy.get(".rpn-text").should("have.text", "Reversed Polish Notation");
  });
});
