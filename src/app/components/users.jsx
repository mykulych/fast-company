import React from 'react'
import { useParams } from 'react-router-dom'
import UsersList from './usersList'
import User from './user'

const Users = () => {
  const { userId } = useParams()

  console.log(userId)

  return <>{userId ? <User userId={userId} /> : <UsersList />}</>
}

export default Users
