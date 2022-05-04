/// <reference types="cypress" />

import { e2eSelector } from "../util/selector";
import { RPN_TEXT } from "./selectors";

export class Rpn {
  public readText(): void {
    cy.get(e2eSelector(RPN_TEXT)).should("have.text", "Hey");
  }
}
