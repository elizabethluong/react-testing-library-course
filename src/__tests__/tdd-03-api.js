// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
// 🐨 you'll need to import your mock savePost from '../api' here
import { savePost as mockSavePost } from '../api'
import {Editor} from '../post-editor-03-api'

// 🐨 use jest.mock to mock out the ../api module and return a `savePost`
jest.mock('../api')
// jest.fn function that resolves a promise

// 🐨 after each test, the mock savePost mock function should be cleared (mockClear)

// 🐨 unskip this test
test('renders a form with title, content, tags, and a submit button', () => {
  // 🐨 pass a fake user (an object with an ID) to the editor as a prop
  mockSavePost.mockResolvedValueOnce()
  const {getByLabelText, getByText} = render(<Editor />)

  // 🐨 set the value of each of these fields
  getByLabelText(/title/i).value = 'test title'
  getByLabelText(/content/i).value = 'test content'
  // 💯 tags should be a comma-separated list of values here
  getByLabelText(/tags/i).value = 'tag1, tag2'
  const submitButton = getByText(/submit/i)

  fireEvent.click(submitButton)

  expect(submitButton).toBeDisabled()


  // and was called with the fake post data (title, content, and tags) and the authorId
  expect(mockSavePost).toHaveBeenCalledWith({
  title: 'test title',
  content: 'test content',
  // 💯 tags should be an array of values here.
  tags: ['tag1', 'tag2']
  })
    // 🐨 assert that the mock `savePost` function was called once
    expect(mockSavePost).toHaveBeenCalledTimes(1)
})
