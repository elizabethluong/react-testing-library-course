import {getQueriesForElement} from '@testing-library/dom'
// 🐨 you're going to need to use React to create react elements, so import react
import React from 'react'
// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
import ReactDOM from 'react-dom'
// 🐨 Here's your component:
import {FavoriteNumber} from '../favorite-number'

// 🐨 For better assertions, use:
//import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
//expect.extend({toHaveAttribute, toHaveTextContent})

// 🐨 Can remove the two lines of code above by importing the below:
import '@testing-library/jest-dom/extend-expect'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  const div = document.createElement('div')
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 assert the input type attribute is a number
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite Number/i) //replace string with regex to ignore casing as end user doesn't care
  expect(input).toHaveAttribute('type', 'number')
})
