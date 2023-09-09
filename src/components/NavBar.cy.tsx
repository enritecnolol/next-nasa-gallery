import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should mount", () => {
    cy.mount(<NavBar />);
    cy.get("span").contains("Nasa gallery");
  });
});
