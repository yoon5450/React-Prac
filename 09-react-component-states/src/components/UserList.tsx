import React from 'react'
import UserDetail from './UserDetail'
import '@/components/UserList.css'


type UserListProps = {
  userData: UserType[];
}

function UserList({ userData }: UserListProps) {
  return (
    <ul>
      {userData.map((user) => {
        return <UserDetail key={user.id} city={user.city} name={user.name} email={user.email}/>
      })}
      
    </ul>
  )
}

export default UserList