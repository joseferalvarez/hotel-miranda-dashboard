/* Tests that the path stays in login when the user or password is incorrect */

describe("The Home Page", () => {
    it("succesfully loads", () => {
        cy.visit("/");
        cy.url().should("include", "/login");
        cy.get(".input-user")
            .type("fakeuser")
            .should("have.value", "fakeuser");
        cy.get(".input-pass")
            .type("fakepass")
            .should("have.value", "fakepass");

        cy.contains("LOGIN")
            .click();

        cy.url().should("include", "/login");
    })
})
