import Input from "./Input";

describe('Input', () => {
  it('should mount with label', () => {
    cy.mount(
      <Input
        name="name"
        label="Name"
      />
    );
    cy.get('label').contains('Name');
  });
});