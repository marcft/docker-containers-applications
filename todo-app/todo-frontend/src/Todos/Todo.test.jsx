import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { test } from 'vitest'

test('renders content', () => {
  const todoText = 'Todo testing is done with react-testing-library'
  const todoInfo = <button>Test info</button>

  render(<Todo todoText={todoText} todoInfo={todoInfo} />)

  const element = screen.getByText(
    'Todo testing is done with react-testing-library'
  )
  expect(element).toBeDefined()

  const button = screen.getByText('Test info')
  expect(button).toBeDefined()
})
