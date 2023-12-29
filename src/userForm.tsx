import { FormEvent, useState } from "react"
import { User } from "./App"

interface UserFormProps {
  setUserList: React.Dispatch<React.SetStateAction<User[]>>
}

export default function UserForm ({ setUserList } : UserFormProps) {

  const [userForm, setUserForm] = useState<User>({
    name: '',
    email: ''
  })

  const handleUserFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setUserList((prev) => [...prev, userForm])
    //clear user form
    setUserForm({ name: '', email: ''})
  };

  const handleUserFormChange = (value: string, type: string) => {
    setUserForm((prev) => ({ ...prev, [type]: value}))
  };
  return (
    <form className='p-4 rounded-lg border-black border flex justify-center items-center flex-col gap-4' onSubmit={(e)=> handleUserFormSubmit(e)}>
      <input className='p-2 rounded-lg' type="text" name="name" placeholder='name' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.name}/>
      <input className='p-2 rounded-lg' type="text" name="email" placeholder='email' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.email}/>
      <button className='bg-black p-4 rounded-lg text-white'>Submit</button>
    </form>
  )
}