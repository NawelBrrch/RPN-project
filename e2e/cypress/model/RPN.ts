/// <reference types="cypress" />

import { e2eSelector } from "../util/selector";
import { RPN_TEXT } from "./selectors";

export class Rpn {
  public readText(): void {
    cy.get(".button").should("have.text", "1");
  }
}
