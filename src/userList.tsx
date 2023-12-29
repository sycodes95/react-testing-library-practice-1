import { User } from "./App"

interface UserListProps {
  userListState: {
    userList: User[],
    setUserList: React.Dispatch<React.SetStateAction<User[]>>
  }
}

export default function UserList ({ userListState } : UserListProps) {
  const { userList, setUserList} = userListState

  const handleUserDelete = (index: number) => {
    setUserList((prev) => {
      const prevClone = [...prev];
      prevClone.splice(index, 1)

      return prevClone
    })
  };

  const renderedUsers = userList.map((user, index) => (
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <button onClick={()=> handleUserDelete(index)}>Delete</button>
    </tr>
  ))
  return (
    <table className=' text-black '>
      <thead className="">
        <tr>
          <th className="w-40">Name</th>
          <th className="w-40">Email</th>
          <th className="w-40">...</th>
        </tr>
        
      </thead>

      <tbody>
        {renderedUsers}
      </tbody>
      
    </table>
  )
}