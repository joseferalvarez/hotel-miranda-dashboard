/* Tests that the path navigates to dashboard when login is correct */

describe("The Home Page", () => {
    it("succesfully loads", () => {
        cy.visit("/");
        cy.url().should("include", "/login");
        cy.get(".input-user")
            .type("JoseFer")
            .should("have.value", "JoseFer");
        cy.get(".input-pass")
            .type("1234")
            .should("have.value", "1234");

        cy.contains("LOGIN")
            .click();

        cy.url().should("include", "/");
    })
})
