// these should normally be in your jest setupTestFrameworkScriptFile
import '@testing-library/jest-dom/extend-expect'
// 0⃣ 🐨 you'll need these:
import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react'
import {HiddenMessage} from '../hidden-message'

// Our component uses a react animation library called react-transition-group.
// By its nature, this library does some interesting things to keep an element
// in the DOM as it's transitioning out which force us to account for those
// in our test. This is really an implementation detail and it is kind of
// annoying. So let's mock out that library to make our tests faster to run
// and easier to write while still getting the confidence that we're hoping for.

// If you look at the hidden-message module we're importing, it only uses the
// `CSSTransition` component from the react-transition-group module. So in
// our mock module factory function that's all we need to return
// 7⃣ 🐨 use jest.mock to mock out the react-transition-group component
// 💯 jest.mock('react-transition-group', () => { /* return the mock object */ })
// 📖 https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options



// 🐨 uncommment to mock annimation library for faster tests and remove async await wait
jest.mock('react-transition-group', () => { 
  return {
    CSSTransition: props => (props.in ? props.children: null),
  }
})

test('shows hidden message when toggle is clicked', // async
  () => {
  // 1⃣ 🐨 render the HiddenMessage component with any message you want
  const myMessage = 'Hello World'
  const {getByText, queryByText} = render(
    <HiddenMessage>{myMessage}</HiddenMessage>,
  )  // 2⃣ 🐨 get the toggle button
  // 💯 (use getByText)
  const toggleButton = getByText(/toggle/i)
  // 3⃣ 🐨 assert that the text you want to render is not in the document
  // 💯 (use `queryByText` and `not.toBeInTheDocument`)
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  // 4⃣ 🐨 Use `fireEvent` to click on the button:
  fireEvent.click(toggleButton)
  // 📖 https://github.com/kentcdodds/react-testing-library/blob/b18ff5b96210a887e784b9f53bd886e11b6ed5e0/README.md#fireeventnode-htmlelement-event-event
  // 5⃣ 🐨 assert that your message is in the docuemnt
  expect(getByText(myMessage)).toBeInTheDocument()
  // 6⃣ 🐨 click on the button again
  fireEvent.click(toggleButton)
  // 8⃣ 🐨 assert that your message is not in the document anymore
  // await wait(() => expect(queryByText(myMessage)).not.toBeInTheDocument()) // without await async / await test will fail as animation hasn't completed yet however, this makes our test longer than we want to so instead, we can mock 'react-transition-group' line 25-29

})
