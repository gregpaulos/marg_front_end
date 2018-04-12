describe("Marg-Finder Application", () => {

	it("has a header component rendered with the h1 of the app title", () => {
		cy.visit("/")
		cy.get("header h1")
			.should("contain", "Margarita-Finder")
	})

	it("renders a <ul> with at least 5 <li> when #findDrinks is clicked", () => {
		cy.get("#findDrinks")
			.click()

		cy.get("ul")
			.find("li")
			.should("have.length.at.least", 5)
	})

	// it("")

})
