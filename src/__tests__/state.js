import '@testing-library/jest-dom/extend-expect'
import React from 'react'
// 🐨 you'll need to import the fireEvent utility from react-testing-library
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'
import user from '@testing-library/user-event'

test('entering an invalid value shows an error message', () => {
  // 🐨 you're going to need getByTestId (see the favorite-number file and note the data-test attribute).
  const {getByLabelText, getByRole} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  // 🐨 let's use fireEvent.change to fire a change event on the input to change the value to 10
  // 📖 learn more here: https://github.com/kentcdodds/react-testing-library/blob/61e382f10d2d8d0be458103b7c267101541ed952/README.md#fireeventnode-htmlelement-event-event
  user.type(input, '155540')
  // fireEvent.change(input, {target: {value: '155540'}})
  expect(getByRole('error-message')).toHaveTextContent(/the number is invalid/i)

  // 🐨 let's replace this assertion with a new one that verifies the node with the test ID of 'error-message' has text "The number is invalid"
})
