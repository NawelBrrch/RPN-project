/// <reference types="cypress" />

import { APPLICATION_URL, Rpn } from "../model";

const rpn = new Rpn();

describe("Test of Counter", () => {
  beforeEach(() => {
    cy.visit(APPLICATION_URL);
  });

  it("Contains all the necessary buttons", () => {
    cy.get("button").contains("1");
    cy.get("button").contains("2");
    cy.get("button").contains("3");
    cy.get("button").contains("4");
    cy.get("button").contains("5");
    cy.get("button").contains("6");
    cy.get("button").contains("7");
    cy.get("button").contains("8");
    cy.get("button").contains("9");
    cy.get("button").contains("0");
    cy.get("button").contains("+");
    cy.get("button").contains("-");
    cy.get("button").contains("x");
    cy.get("button").contains("/");
    cy.get("button").contains(".");
    cy.get("button").contains("NEGATIVE");
    cy.get("button").contains("Enter");
    cy.get("button").contains("Delete All");
    cy.get("button").contains("AC");
  });

  it("Calculs a simple expression 1 1 + = 2", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("+").click();
    cy.get("p").first().contains("2");
  });

  it("Calculs a simple expression 2 1 - = 1", () => {
    cy.get("button").contains("2").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("-").click();
    cy.get("p").first().contains("1");
  });

  it("Calculs a simple expression 4 3 * = 12", () => {
    cy.get("button").contains("4").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("x").click();
    cy.get("p").first().contains("12");
  });

  it("Calculs a simple expression 6 2 / = 3", () => {
    cy.get("button").contains("6").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("/").click();
    cy.get("p").first().contains("3");
  });

  it("Calculs a harder expression 1 2 4 + * = 12", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("+").click();
    cy.get("p").first().contains("3");
    cy.get("p").last().contains("4");
    cy.get("button").contains("x").click();
    cy.get("p").first().contains("12");
  });

  it("Calculs a harder expression 1 -12 4 + * = -44", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("NEGATIVE").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("4").click();
    cy.get("button").contains("+").click();
    cy.get("p").first().contains("1 NEGATE");
    cy.get("p").last().contains("4");
    cy.get("button").contains("x").click();
    cy.get("p").first().contains("44 NEGATE");
  });

  it("Calculs a harder expression 1 -12 + 32 66 / -1 + + = 64.65625 ", () => {
    cy.get("button").contains("1").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("NEGATIVE").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("3").click();
    cy.get("button").contains("2").click();
    cy.get("button").contains("Enter").click();
    cy.get("button").contains("6").click();
    cy.get("button").contains("6").click();
    cy.get("button").contains("/").click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("NEGATIVE").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("+").click();
    cy.get("p").first().contains("64.65625");
  });
});
