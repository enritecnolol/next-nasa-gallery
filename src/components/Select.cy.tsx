import React from 'react'
import Select from './Select'

const selectOptionMock = [
  {
    value: "a",
    label: "A"
  },
  {
    value: "b",
    label: "B"
  }
]

describe('Select', () => {
  it('renders', () => {
    cy.mount(<Select options={selectOptionMock} />)
    cy.get('div > select').select('A');
  })

  it('render with label', () => {
    cy.mount(<Select options={selectOptionMock} label="test"/>)
    cy.get('div > select').select('A');
    cy.get('label').contains('test');
  })
})