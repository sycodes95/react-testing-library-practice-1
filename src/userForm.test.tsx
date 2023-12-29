import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import UserForm from './userForm'
import {vi} from 'vitest';

test('it shows two inputs and a button', () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()

})

test('it calls on onUserAdd when form is submitted', async () => {
  
  // Try to render my component

  const mock = vi.fn()
  
  render(<UserForm onUserAdd={mock} />)

  const [nameInput , emailInput] = screen.getAllByRole('textbox')

  // Find the two inputs 

  // SImulate typing in a name 
  await user.click(nameInput);
  await user.keyboard('jane')  

  // Simulate typing in an email
  await user.click(emailInput)
  await user.keyboard('jane@jane.com')
  // Find the button 

  const button = screen.getByRole('button')
  // Simulate clicking the button
  await user.click(button)
  // Assertion to make sure 'onUserAdd' is called.
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com'})

})