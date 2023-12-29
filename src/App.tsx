import { FormEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface User {
  name: string;
  email: string;
}


function App() {
  const [userForm, setUserForm] = useState<User>({
    name: '',
    email: ''
  })

  const [userList, setUserList] = useState<User[]>([])

  const handleUserFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setUserList((prev) => [...prev, userForm])
    //clear user form
    setUserForm({ name: '', email: ''})
  }

  const handleUserFormChange = (value: string, type: string) => {
    setUserForm((prev) => ({ ...prev, [type]: value}))
  }

  const handleUserDelete = (index: number) => {
    setUserList((prev) => {
      const prevClone = [...prev];
      prevClone.splice(index, 1)
      console.log();

      return prevClone
    })
  }

  useEffect(()=> {
    console.log(userList);
  },[userList])

  return (
    <>
      <form className='p-4 rounded-lg border-black border flex justify-center items-center flex-col gap-4' onSubmit={(e)=> handleUserFormSubmit(e)}>
        <input className='p-2 rounded-lg' type="text" name="name" placeholder='name' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.name}/>
        <input className='p-2 rounded-lg' type="text" name="email" placeholder='email' onChange={(e) => handleUserFormChange(e.target.value, e.target.name)} value={userForm.email}/>
        <button className='bg-black p-4 rounded-lg text-white'>Submit</button>
      </form>

      <div className='p-4 flex flex-col gap-4 '>
        {
        userList.map((data, index) => (
          <div className='flex gap-4 items-center border border-black rounded-lg p-4 text-black justify-between'>
            <span>{data.name}</span>
            <span>{data.email}</span>
            <button className='bg-red-500 rounded-lg  p-2' onClick={()=> handleUserDelete(index)}>Delete</button>
          </div>
        ))
        }
      </div>
    </>
  )
}

export default App
