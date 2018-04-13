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

	it("displays an error message prompting the user to enable geo-location if #findDrinks is clicked with geo-location disabled", () => {
		cy.request("GET", "http://localhost:3000/margs/undefined/undefined")
			.then(response => {
        expect(response.body).to.have.property("message", "Please enable geo-location and try again")
      })
  })

  it("renders a minimum of 5 margs sorted by proximity when #findDrinks is clicked", () => {
    cy.get("#findDrinks")
      .click()

    cy.get("ul")
      .find("li")
      .should("have.length.at.least", 5)

    cy.get("ul li span").eq(0)
      .then($num0 => {
        const num0 = $num.text()

        cy.get("ul li span").eq(0)
          .should($num1 => {
            expect($num1.text()).to.be.greaterThan(num0)
          })
      })

    cy.get("ul li span").eq(1)
      .then($num1 => {
        const num1 = $num.text()

        cy.get("ul li span").eq(2)
          .should($num2 => {
            expect($num2.text()).to.be.greaterThan(num1)
          })
      })

    cy.get("ul li span").eq(2)
      .then($num2 => {
        const num2 = $num.text()

        cy.get("ul li span").eq(3)
          .should($num3 => {
            expect($num3.text()).to.be.greaterThan(num2)
          })
      })

    cy.get("ul li span").eq(3)
      .then($num3 => {
        const num3 = $num.text()

        cy.get("ul li span").eq(4)
          .should($num4 => {
            expect($num4.text()).to.be.greaterThan(num3)
          })
      })
  })

  it("has a map (from gmaps.js)", () => {
    cy.get("#map")
      .should("exist")
  })

  it("has at least 5 pin images rendered on the map", () => {
    cy.get("#map img")
      .should("have.length.at.least", 5)
  })

})
