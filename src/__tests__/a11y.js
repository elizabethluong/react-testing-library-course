import React from 'react'
import {render} from '@testing-library/react'
import {axe, toHaveNoViolations} from 'jest-axe'

expect.extend(toHaveNoViolations)

function InaccessibleForm() {
  return (
    <form>
      <input placeholder="username" name="username" />
    </form>
  )
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" name="username" />
    </form>
  )
}

test('inaccessible forms fail axe', async () => {
  const {container} = render(<InaccessibleForm />)
  // NOTE: I can't think of a situation where you'd want to test that some HTML
  // actually _does_ have accessibility issues... This is only here for
  // demonstration purposes.
  const results = await axe(container)
  expect(results).not.toHaveNoViolations()
})

test('accessible forms pass axe', async () => {
  const { container } = render(<AccessibleForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
