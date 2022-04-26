import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="d-flex mb-3">
      <Link to={'/'}>
        <h3 className="m-2">Main</h3>
      </Link>
      <Link to={'/login'}>
        <h3 className="m-2">Login</h3>
      </Link>
      <Link to={'/users'}>
        <h3 className="m-2">Users</h3>
      </Link>
    </div>
  )
}

export default Header
