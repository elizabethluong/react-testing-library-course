// 🐨 you're going to need to use React to create react elements, so import react
import React from 'react'
// 🐨 we're going to render the FavoriteNumber component with ReactDOM so you'll need to import react-dom
import ReactDOM from 'react-dom'
// 🐨 Here's your component:
import {FavoriteNumber} from '../favorite-number'
//import {toHaveAttribute, toHaveTextContent} from '@testing-library/jest-dom'
//expect.extend({toHaveAttribute, toHaveTextContent})

//Can remove the two lines of code above by importing the below:
import '@testing-library/jest-dom/extend-expect'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  const div = document.createElement('div')
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 assert the input type attribute is a number
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  //:🐨 assert the label's text content is "Favorite Number"
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})
