import {render} from '@testing-library/react'
// 🐨 you're going to need to use React to create react elements, so import react
import React from 'react'
// 🐨 Here's your component:
import {FavoriteNumber} from '../favorite-number'
// 🐨 For better assertions, use:
//import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
//expect.extend({toHaveAttribute, toHaveTextContent})

// 🐨 Can remove the two lines of code above by importing the below:
import '@testing-library/jest-dom/extend-expect'

// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {container, ...queries}
// }

// test('renders a number input with a label "Favorite Number"', () => {
//   const {getByLabelText} = render(<FavoriteNumber />)
//   const input = getByLabelText(/favorite number/i)
//   expect(input).toHaveAttribute('type', 'number')
// })

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 assert the input type attribute is a number
  const {getByLabelText, debug} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite Number/i) //replace string with regex to ignore casing as end user doesn't care
  expect(input).toHaveAttribute('type', 'number')
  debug(input)
})
