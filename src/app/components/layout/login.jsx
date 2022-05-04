import React, { useEffect, useState } from 'react'
import TextField from '../textField'
import { validator } from '../../utils/validator'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validate()
  }, [data])

  const validateConfig = {
    email: { isRequired: { message: 'Email is required' }, isEmail: { message: 'Email is incorrectly' } },
    password: {
      isRequired: { message: 'Password is required' },
      isCapitalSymbol: { message: 'Password must contain at least one capital letter' },
      isContainDigit: { message: 'Password must contain at least one digit' },
      min: { message: 'Password must be at least 8 characters long', value: 8 }
    }
  }

  const validate = () => {
    const errors = validator(data, validateConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValidate = validate()
    if (!isValidate) return
    console.log(data)
  }

  const isValid = Object.keys(errors).length === 0

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField label="Email" name="email" value={data.email} onChange={handleChange} error={errors.email} />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              error={errors.password}
            />
            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
