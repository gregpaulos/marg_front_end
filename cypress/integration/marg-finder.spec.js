describe("Marg-Finder Application", () => {
	it("has a header component rendered with the h1 of the app title", () => {
		cy.visit("/")
		cy.get("header h1")
			.should("contain", "Margarita-Finder")
	})
})
