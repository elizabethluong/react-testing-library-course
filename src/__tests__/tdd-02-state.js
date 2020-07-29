// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'


import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {Editor} from '../post-editor-02-state'

test('renders a form with title, content, tags, and a submit button', () => {
  const {getByLabelText, getByText} = render(<Editor />)
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  getByLabelText(/tags/i)
  const submitButton = getByText(/submit/i)
  // 🐨 click the submit button
  fireEvent.click(submitButton)
  // 🐨 verify that the submit button is disabled when clicked
  expect(submitButton).toBeDisabled()
})
