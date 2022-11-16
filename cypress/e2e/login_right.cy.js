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

        cy.get(".login-button")
            .click();

        cy.url().should("include", "/");
    })
})