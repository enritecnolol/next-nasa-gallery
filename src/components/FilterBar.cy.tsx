import FilterBar from "./FilterBar";

describe('FilterBar', () => {

  it('should render correctly', () => {
    cy.mount(<FilterBar />);
    cy.get('.w-60').should('have.length', 4);
    cy.get('Select').should('have.length', 3);
    cy.get('Input').should('have.length', 1);
  });
  
});