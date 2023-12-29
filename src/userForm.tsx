import { FormEvent, useState } from "react"
import { User } from "./App"

interface UserFormProps {
  onUserAdd: (userForm : User) => void
}

export default function UserForm ({ onUserAdd } : UserFormProps) {

  const [userForm, setUserForm] = useState<User>({
    name: '',
    email: ''
  })

  const handleUserFormSubmit = (e: FormEvent) => {
    e.preventDefault(); 

    onUserAdd(userForm);
    //clear user form
    setUserForm({ name: '', email: ''});
  };
  
  const handleUserFormChange = (value: string, type: string) => {
    setUserForm((prev) => ({ ...prev, [type]: value}));
  };
  return (
    <form className='flex flex-col items-center justify-center gap-4 p-4 border border-black rounded-lg' onSubmit={handleUserFormSubmit}>
      <input className='p-2 rounded-lg' type="text" name="name" placeholder='name' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.name}/>
      <input className='p-2 rounded-lg' type="text" name="email" placeholder='email' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.email}/>
      <button className='p-4 text-white bg-black rounded-lg'>Submit</button>
    </form>
  )
}