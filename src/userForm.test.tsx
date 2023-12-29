import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import UserForm from './userForm'

test('it shows two inputs and a button', () => {
  render(<UserForm />)

  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()

})

test('it calls on setUserList when form is submitted', () => {
  //NOT THE BEST IMPLEMENTATION

  
})