// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', async () => {
  render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  const decrement = screen.getByText('Decrement')
  const increment = screen.getByText('Increment')
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  // remember to add await so you know the click has finished
  await userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  await userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
