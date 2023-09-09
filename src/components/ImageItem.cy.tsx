import { imgMock } from "../../cypress/mocks/mocks";
import ImageItem from "./ImageItem";



describe('ImageItem', () => {
  it('should render correctly', () => {
    cy.mount(<ImageItem imgUrl={imgMock} />);
    cy.get('img').should('have.attr', 'width', 350);
    cy.get('img').should('have.attr', 'height', 300);
  });
});