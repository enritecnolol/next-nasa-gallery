import { NasaImagesMock } from "../../cypress/mocks/mocks";
import ImagesList from "./ImagesList";

describe('ImagesList', () => {

  it('should render correctly with request', () => {
    cy.intercept("GET", "http://localhost:3000/api/images?earthDate=&camera=&rover=&page=1", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          data : {
            data: []
          }
        }
      })   
    }).as("data")

    cy.mount(<ImagesList />);
    
    cy.wait("@data").then((res) => {
      expect(res.response?.body.data.data.length).to.equal(0)
      expect(res.response?.statusCode).to.equal(200)
    })
    
    cy.get('#scrollableDiv');
    cy.get('.grid-cols-3');
  });

  it('should render correctly with ImagesList and 2 items', () => {
    cy.intercept("GET", "http://localhost:3000/api/images?earthDate=&camera=&rover=&page=1", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          data : {
            data: NasaImagesMock
          }
        }
      })   
    }).as("data")

    cy.mount(<ImagesList />);
    
    cy.wait("@data").then((res) => {
      expect(res.response?.body.data.data.length).to.equal(2)
      expect(res.response?.statusCode).to.equal(200)
    })
    
    cy.get('#scrollableDiv');
    cy.get('.grid-cols-3');
  });

});