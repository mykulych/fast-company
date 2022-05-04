import React from 'react'
import TextField from './textField'
import PropType from 'prop-types'

const Search = ({ data, handleSearch }) => {
  return <TextField label="Search" type="text" name="search" value={data} onChange={handleSearch} />
}

Search.propTypes = {
  data: PropType.string.isRequired,
  handleSearch: PropType.func.isRequired
}

export default Search
