// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {GreetingLoader} from '../greeting-loader-02-dependency-injection'

// 4⃣ 🐨 remove this jest.mock call

test('loads greetings on click', async () => {
  // 2⃣ 🐨 create the variable mockLoadGreeting right here and pass
  const mockLoadGreeting = jest.fn()
  const testGreeting = 'TEST_GREETING'
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: 'testGreeting'}})
  // "loadGreeting" as a prop to GreetingLoader
  const {getByLabelText, getByText} = render(<GreetingLoader loadGreeting={mockLoadGreeting}/>)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  nameInput.value = 'Liz'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Liz')
  wait(() => expect(getByLabelText(/greeting/i)).toHaveTextContent('testGreeting'))
})


