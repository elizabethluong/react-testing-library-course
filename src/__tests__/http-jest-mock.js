import '@testing-library/jest-dom/extend-expect'
// 0⃣ 🐨 you're going to need these
import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {loadGreeting as mockLoadGreeting, loadGreeting} from '../api'
import {GreetingLoader} from '../greeting-loader-01-mocking'

// our component makes an HTTP request when you click on the load button.
// we don't want it to do this for various reasons, so instead we'll mock
// the module responsible for making that HTTP call to have it return
// a fake version of what we want it to return.
// 4⃣ 🐨 use jest.mock to mock the '../api' module and return a fake `loadGreeting`:

jest.mock('../api', () => {
  return {
    loadGreeting: jest.fn(subject =>
      Promise.resolve({data: {greeting: `Hi ${subject}`}}),
    ),
  }
})

// 👀 notice this as an async test:
test('loads greetings on click', async () => {
  // 1⃣ 🐨 render the GreetingLoader component
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: 'TEST_GREETING'}})
  const { getByLabelText, getByText, getByTestId } = render(<GreetingLoader />)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  // 2⃣ 🐨 set the name input's value to whatever you like
  nameInput.value = 'Liz'
  // 3⃣ 🐨 use fireEvent to click on the load button
  fireEvent.click(loadButton)
  // 5⃣ 🐨 make an assertion that your mocked loadGreeting function was called once
  // and that it was called with the value you set to the name input's value.
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Liz')

  // 6⃣ 🐨 use react-testing-library's `wait` utility to wait until the `greeting`
})
