// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'

// 🐨 you're gonna need these
import React from 'react'
import {render} from '@testing-library/react'
import {Editor} from '../post-editor-01-markup'

test('renders a form with title, content, tags, and a submit button', () => {
  // 🐨 render the editor
  const {getByLabelText, getByText} = render(<Editor />)
  // 🐨 verify that you can get the title, content, and tags by their label text
  getByLabelText(/title/i)
  getByLabelText(/content/i)
  getByLabelText(/tags/i)
  getByText(/submit/i)
  // 🐨 verify that you can get the submit button by its label text
})
