import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import UserForm from './userForm';
import UserList from './userList';

export interface User {
  name: string;
  email: string;
}


function App() {
  
  const [userList, setUserList] = useState<User[]>([])

  useEffect(()=> {
    console.log(userList);
  },[userList])

  const onUserAdd = ( user : User) => {
    setUserList((prev) => [...prev, user]);
  }

  return (
    <>

      <UserForm onUserAdd={onUserAdd}/>
      <UserList userListState={{userList, setUserList}} />
      
    </>
  )
}

export default App
