import React, { useState, useEffect } from 'react'
import api from '../api'
import PropTypes from 'prop-types'
import QualitiesList from './qualitiesList'
import { useHistory } from 'react-router-dom'

const User = ({ userId }) => {
  const [user, setUser] = useState()
  const history = useHistory()
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  console.log('profession: ', user)

  return (
    <>
      {user ? (
        <>
          <h1>{user?.name}</h1>
          <h2>Профессия: {user.profession?.name}</h2>
          <h2>
            <QualitiesList qualities={user.qualities} />
          </h2>
          <h2>CompletedMeetings: {user.completedMeetings}</h2>
          <h2>Rate: {user.rate}</h2>
          <button onClick={() => history.replace('/users')}>Все пользователи</button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}

User.propTypes = {
  userId: PropTypes.string.isRequired
}

export default User
